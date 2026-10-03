import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ActionDialog } from "@/components/action-form";
import type { ActionState } from "@/lib/action-state";

vi.mock("next/navigation", () => ({ useRouter: () => ({ refresh: vi.fn() }) }));

describe("essential dialogs", () => {
  it("opens from a labelled mobile-sized action and exposes its form labels", async () => {
    const showModal = vi.fn(function (this: HTMLDialogElement) { this.setAttribute("open", ""); });
    HTMLDialogElement.prototype.showModal = showModal;
    HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) { this.removeAttribute("open"); });
    const action = async (state: ActionState, data: FormData) => { void state; void data; return { ok: true, message: "Saved" }; };
    render(<ActionDialog trigger={<button type="button">Record test score</button>} title="Record PACE test score" description="Review before saving" action={action} submitLabel="Save test score"><label htmlFor="score">Test score</label><input id="score" name="score" /></ActionDialog>);
    await userEvent.click(screen.getByRole("button", { name: "Record test score" }));
    expect(showModal).toHaveBeenCalled(); expect(screen.getByRole("dialog")).toHaveAccessibleName("Record PACE test score"); expect(screen.getByLabelText("Test score")).toBeInTheDocument();
  });
});
