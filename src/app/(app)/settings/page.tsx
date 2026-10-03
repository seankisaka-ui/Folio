import { StatefulForm } from "@/components/action-form";
import { Card } from "@/components/ui";
import { updateSettingsAction } from "@/app/actions";
import { requireHousehold } from "@/lib/session";

export default async function SettingsPage() {
  const { user, household } = await requireHousehold();
  return <div className="page"><header className="page-header"><div><p className="eyebrow">Household and account</p><h1>Settings</h1><p>Keep household-level academic rules explicit and easy to verify.</p></div></header><div className="grid-2"><Card><div className="card-header"><h2>Household</h2></div><div className="card-body"><StatefulForm action={updateSettingsAction} submitLabel="Save settings"><div className="field"><label htmlFor="name">Household name</label><input className="control" id="name" name="name" defaultValue={household.name} required /></div><div className="field"><label htmlFor="passMark">PACE Test pass mark</label><div className="row" style={{ flexWrap: "nowrap" }}><input className="control num" id="passMark" name="passMark" type="number" min="0" max="100" defaultValue={household.pass_mark} required /><strong>%</strong></div><p className="helper">Scores are recorded exactly as entered. This mark controls the “Passed” or “Needs review” status.</p></div></StatefulForm></div></Card><Card><div className="card-header"><h2>Account</h2></div><div className="card-body stack"><div><span className="label">Name</span><p>{user.name}</p></div><div><span className="label">Email</span><p>{user.email}</p></div><div className="alert"><p>Folio uses secure, database-backed sessions. Password changes and recovery email delivery require a configured mail provider.</p></div></div></Card></div></div>;
}
