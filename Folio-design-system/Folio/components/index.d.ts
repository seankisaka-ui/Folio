import type * as React from 'react';

/* ---------- Foundations ---------- */
export type IconName = 'house' | 'users' | 'user' | 'user-plus' | 'book-open' | 'layers' | 'clipboard-check' | 'history' | 'file-text' | 'sparkles' | 'settings' | 'circle-help' | 'log-out' | 'plus' | 'search' | 'chevron-down' | 'chevron-right' | 'chevron-left' | 'chevrons-left' | 'menu' | 'x' | 'check' | 'circle-check' | 'triangle-alert' | 'circle-alert' | 'info' | 'circle-x' | 'calendar' | 'pencil' | 'trash-2' | 'arrow-right' | 'ellipsis' | 'bell' | 'funnel' | 'download' | 'printer' | 'wifi-off' | 'refresh-cw' | 'loader-circle' | 'clock' | 'list-checks' | 'send' | 'undo-2' | 'notebook-pen' | 'graduation-cap' | 'minus' | 'lock';
/** Lucide outline icon. Decorative unless `label` is given. */
export interface IconProps extends React.SVGAttributes<SVGSVGElement> { name: IconName; size?: 16 | 20 | 22 | 24 | 32 | number; label?: string; strokeWidth?: number }
export declare function Icon(props: IconProps): React.ReactElement;

/* ---------- Actions ---------- */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: IconName; iconRight?: IconName;
  /** Shows a spinner, sets aria-busy and ignores clicks. */
  loading?: boolean; loadingText?: string;
  block?: boolean; pressed?: boolean;
}
export declare function Button(props: ButtonProps): React.ReactElement;
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: IconName; /** Required accessible name + tooltip. */ label: string; variant?: 'ghost' | 'outline' | 'primary'; size?: number; showTooltip?: boolean }
export declare function IconButton(props: IconButtonProps): React.ReactElement;

/* ---------- Forms ---------- */
export interface FieldProps { label: React.ReactNode; helper?: React.ReactNode; error?: React.ReactNode; warning?: React.ReactNode; success?: React.ReactNode; required?: boolean; optional?: boolean; id?: string; children: React.ReactElement }
export declare function Field(props: FieldProps): React.ReactElement;
interface ControlState { invalid?: boolean; success?: boolean; size?: 'sm' | 'md' }
export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, ControlState { icon?: IconName; suffix?: React.ReactNode; end?: React.ReactNode }
export declare function TextInput(props: TextInputProps): React.ReactElement;
export declare function NumberInput(props: TextInputProps): React.ReactElement;
/** 0–100 with a fixed % suffix. */
export declare function ScoreInput(props: TextInputProps): React.ReactElement;
export declare function DateInput(props: TextInputProps): React.ReactElement;
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>, ControlState { options: (string | { value: string; label: string; disabled?: boolean })[]; placeholder?: string }
export declare function Select(props: SelectProps): React.ReactElement;
export interface SearchFieldProps extends TextInputProps { label?: string; onClear?: () => void }
export declare function SearchField(props: SearchFieldProps): React.ReactElement;
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, ControlState {}
export declare function TextArea(props: TextAreaProps): React.ReactElement;
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { label: React.ReactNode; description?: React.ReactNode; invalid?: boolean; indeterminate?: boolean }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> { label: React.ReactNode; description?: React.ReactNode; card?: boolean }
export declare function Radio(props: RadioProps): React.ReactElement;
export interface RadioGroupProps { legend: React.ReactNode; name: string; options: { value: string; label: React.ReactNode; description?: React.ReactNode; disabled?: boolean }[]; value?: string; defaultValue?: string; onChange?: (value: string) => void; card?: boolean; horizontal?: boolean; error?: React.ReactNode }
export declare function RadioGroup(props: RadioGroupProps): React.ReactElement;
export interface SwitchProps { label: React.ReactNode; checked?: boolean; defaultChecked?: boolean; onChange?: (on: boolean) => void; disabled?: boolean; showState?: boolean }
export declare function Switch(props: SwitchProps): React.ReactElement;
export interface ReadOnlyFieldProps { label: React.ReactNode; value: React.ReactNode; hint?: string }
export declare function ReadOnlyField(props: ReadOnlyFieldProps): React.ReactElement;
export declare function FieldGroup(props: { columns?: 1 | 2; children: React.ReactNode }): React.ReactElement;

/* ---------- Navigation ---------- */
export interface NavItemData { id: string; icon: IconName; label: string }
export interface SidebarProps { current?: string; sections?: { title: string; items: NavItemData[] }[]; user?: { name: string; role?: string } | null; counts?: Record<string, number>; collapsed?: boolean; defaultCollapsed?: boolean; collapsible?: boolean; onToggle?: (collapsed: boolean) => void; onNavigate?: (id: string) => void }
export declare function Sidebar(props: SidebarProps): React.ReactElement;
export interface NavItemProps { icon: IconName; label: string; href?: string; current?: boolean; count?: number; disabled?: boolean; collapsed?: boolean; onClick?: React.MouseEventHandler }
export declare function NavItem(props: NavItemProps): React.ReactElement;
export declare function SidebarSection(props: { title: string; children: React.ReactNode }): React.ReactElement;
export declare function SidebarAccount(props: { name: string; role?: string; onSignOut?: () => void }): React.ReactElement;
export interface ChildOption { id: string; name: string; meta?: string }
export interface ChildSwitcherProps { options: ChildOption[]; value?: string; onChange?: (id: string) => void; open?: boolean; label?: string }
export declare function ChildSwitcher(props: ChildSwitcherProps): React.ReactElement;
export declare function Breadcrumbs(props: { items: { label: string; href?: string }[] }): React.ReactElement;
export interface PageHeaderProps { title: React.ReactNode; subtitle?: React.ReactNode; actions?: React.ReactNode; breadcrumbs?: { label: string; href?: string }[]; /** Greeting size (Home only). */ display?: boolean }
export declare function PageHeader(props: PageHeaderProps): React.ReactElement;
export declare function MobileTopBar(props: { title: string; onMenu?: () => void; onBack?: () => void; action?: React.ReactNode }): React.ReactElement;
export declare function BottomNav(props: { items?: NavItemData[]; current?: string; onNavigate?: (id: string) => void }): React.ReactElement;
export declare function MobileDrawer(props: { open?: boolean; onClose?: () => void; current?: string; inline?: boolean }): React.ReactElement | null;

/* ---------- Content ---------- */
export type PaceStatus = 'not-started' | 'in-progress' | 'ready-for-test' | 'passed' | 'needs-review' | 'completed';
export interface CardProps extends React.HTMLAttributes<HTMLElement> { title?: React.ReactNode; subtitle?: React.ReactNode; action?: React.ReactNode; footer?: React.ReactNode; flush?: boolean; muted?: boolean; as?: 'section' | 'article' | 'div' }
export declare function Card(props: CardProps): React.ReactElement;
export interface InteractiveCardProps { href?: string; onClick?: React.MouseEventHandler; selected?: boolean; disabled?: boolean; label?: string; className?: string; children: React.ReactNode }
export declare function InteractiveCard(props: InteractiveCardProps): React.ReactElement;
export declare function Avatar(props: { name: string; size?: 'sm' | 'md' | 'lg' }): React.ReactElement;
export interface BadgeProps { tone?: 'neutral' | 'progress' | 'success' | 'warning' | 'error' | 'accent' | 'ai'; icon?: IconName | false; children: React.ReactNode }
export declare function Badge(props: BadgeProps): React.ReactElement;
export declare function StatusBadge(props: { status: PaceStatus; children?: React.ReactNode }): React.ReactElement;
export interface ProgressBarProps { label: string; value: number; max?: number; valueText?: string; size?: 'md' | 'lg'; hideLabel?: boolean }
export declare function ProgressBar(props: ProgressBarProps): React.ReactElement;
/** 0 Pages · 1 Checkups · 2 Self Test · 3 PACE Test · 4 all done */
export declare function PaceSteps(props: { current: 0 | 1 | 2 | 3 | 4 }): React.ReactElement;
export interface ScoreDisplayProps { score: number | null; passMark?: number; size?: 'sm' | 'md' | 'lg'; date?: string; showStatus?: boolean }
export declare function ScoreDisplay(props: ScoreDisplayProps): React.ReactElement;
export declare function StatTile(props: { label: string; value: React.ReactNode; note?: React.ReactNode; icon?: IconName }): React.ReactElement;
export interface ChildSummaryCardProps { name: string; meta?: string; paces: { subject: string; pace: number | string }[]; status?: React.ReactNode; updated?: string; href?: string; onOpen?: React.MouseEventHandler }
export declare function ChildSummaryCard(props: ChildSummaryCardProps): React.ReactElement;
export interface SubjectCardProps { subject: string; pace: number | null; progress?: number; pagesDone?: number; pagesTotal?: number; status?: PaceStatus; updated?: string; selected?: boolean; onClick?: () => void }
export declare function SubjectCard(props: SubjectCardProps): React.ReactElement;
export interface PaceCardProps { subject: string; pace: number; nextPace: number; pagesDone?: number; pagesTotal?: number; stage?: 0 | 1 | 2 | 3 | 4; status: PaceStatus; updated?: string; score?: number; passMark?: number; onLog?: () => void; onTest?: () => void; onAdvance?: () => void }
export declare function PaceCard(props: PaceCardProps): React.ReactElement;
export interface ActivityItemProps { text: React.ReactNode; time?: string; meta?: string; icon?: IconName; tone?: 'success' | 'ai'; ai?: boolean | 'edited' }
export declare function ActivityItem(props: ActivityItemProps): React.ReactElement;
export declare function Timeline(props: { label?: string; children: React.ReactNode }): React.ReactElement;
export interface HistoryEntryProps { title: React.ReactNode; meta?: React.ReactNode; kind?: 'complete' | 'current' | 'warning' | 'neutral'; badge?: React.ReactNode }
export declare function HistoryEntry(props: HistoryEntryProps): React.ReactElement;
export interface RecordRowProps { title: React.ReactNode; meta?: React.ReactNode; value?: React.ReactNode; badge?: React.ReactNode; avatar?: string; href?: string; onClick?: React.MouseEventHandler }
export declare function RecordRow(props: RecordRowProps): React.ReactElement;
export declare function EmptyState(props: { icon?: IconName; title: string; text?: React.ReactNode; actions?: React.ReactNode }): React.ReactElement;
export interface AlertProps { tone?: 'info' | 'success' | 'warning' | 'error'; title?: React.ReactNode; children?: React.ReactNode; actions?: React.ReactNode; onDismiss?: () => void }
export declare function Alert(props: AlertProps): React.ReactElement;
export declare function Notification(props: { title: string; text?: string; time: string; unread?: boolean; icon?: IconName; action?: React.ReactNode }): React.ReactElement;
export declare function Tooltip(props: { text: string; placement?: 'top' | 'bottom'; open?: boolean; children: React.ReactElement }): React.ReactElement;
export declare function Popover(props: { trigger: React.ReactElement; title?: string; open?: boolean; align?: 'start' | 'end'; children: React.ReactNode }): React.ReactElement;
export type MenuItem = { label: string; icon?: IconName; danger?: boolean; disabled?: boolean; onSelect?: () => void } | 'separator';
export declare function DropdownMenu(props: { label?: string; trigger?: React.ReactElement; items: MenuItem[]; open?: boolean; align?: 'start' | 'end' }): React.ReactElement;
export interface TabsProps { tabs: { id: string; label: string; count?: number; content: React.ReactNode; disabled?: boolean }[]; value?: string; defaultValue?: string; onChange?: (id: string) => void; label?: string }
export declare function Tabs(props: TabsProps): React.ReactElement;
export declare function Pagination(props: { page: number; pages: number; total?: number; perPage?: number; noun?: string; onChange?: (page: number) => void }): React.ReactElement;
export interface TableColumn<R> { key: string; label: string; numeric?: boolean; sortable?: boolean; render?: (row: R) => React.ReactNode }
export interface TableProps<R> { caption?: string; columns: TableColumn<R>[]; rows: R[]; rowKey?: string; sort?: { key: string; dir: 'asc' | 'desc' }; onSort?: (key: string) => void; selectedKey?: string | number; empty?: React.ReactNode; stackOnMobile?: boolean }
export declare function Table<R extends Record<string, any>>(props: TableProps<R>): React.ReactElement;

/* ---------- Overlays & feedback ---------- */
export interface DialogProps { open?: boolean; onClose?: () => void; title: string; icon?: IconName; tone?: 'default' | 'warning' | 'danger'; size?: 'sm' | 'md'; footer?: React.ReactNode; dismissible?: boolean; inline?: boolean; children: React.ReactNode }
export declare function Dialog(props: DialogProps): React.ReactElement | null;
export interface ConfirmDialogProps { open?: boolean; title: string; description?: React.ReactNode; summary?: [string, React.ReactNode][]; confirmLabel?: string; cancelLabel?: string; tone?: 'default' | 'danger'; icon?: IconName; loading?: boolean; onConfirm?: () => void; onCancel?: () => void; inline?: boolean }
export declare function ConfirmDialog(props: ConfirmDialogProps): React.ReactElement | null;
export declare function BottomSheet(props: { open?: boolean; onClose?: () => void; title: string; footer?: React.ReactNode; inline?: boolean; children: React.ReactNode }): React.ReactElement | null;
export declare function Toast(props: { tone?: 'success' | 'warning' | 'error' | 'info'; action?: React.ReactNode; onDismiss?: () => void; children: React.ReactNode }): React.ReactElement;
export declare function ToastRegion(props: { children: React.ReactNode }): React.ReactElement;
export declare function Spinner(props: { label?: string; size?: number; showLabel?: boolean }): React.ReactElement;
export declare function Skeleton(props: { width?: number | string; height?: number | string; radius?: number | string }): React.ReactElement;
export declare function StatusMessage(props: { kind?: 'success' | 'error' | 'offline' | 'loading'; title: string; text?: React.ReactNode; actions?: React.ReactNode }): React.ReactElement;
export declare function ConnectionBanner(props: { online?: boolean; pending?: number; onRetry?: () => void }): React.ReactElement;

/* ---------- AI assistant ---------- */
export interface AssistantComposerProps { value?: string; onChange?: (v: string) => void; onSubmit?: (v: string) => void; prompts?: string[]; loading?: boolean; placeholder?: string; showPrompts?: boolean }
export declare function AssistantComposer(props: AssistantComposerProps): React.ReactElement;
export interface AiField { key: string; label: string; value: string; display?: string; type?: 'text' | 'score' | 'date'; options?: string[]; changed?: boolean; missing?: boolean }
export interface AiActionPreviewProps { quote?: string; action?: string; fields: AiField[]; state?: 'review' | 'editing' | 'saving' | 'saved'; onConfirm?: () => void; onEdit?: () => void; onCancel?: () => void; onFieldChange?: (key: string, value: string) => void }
export declare function AiActionPreview(props: AiActionPreviewProps): React.ReactElement;
export declare function AiClarification(props: { quote?: string; question: string; options: { value: string; label: string; description?: string }[]; onChoose?: (v: string) => void; onCancel?: () => void }): React.ReactElement;
export declare function AiFallback(props: { quote?: string; reason?: string; unavailable?: boolean; onRetry?: () => void; onManual?: () => void }): React.ReactElement;
export declare function AiThinking(props: { quote?: string }): React.ReactElement;
export declare function AiTag(props: { edited?: boolean; children?: React.ReactNode }): React.ReactElement;

declare global { interface Window { Folio: typeof import('./index') } }
