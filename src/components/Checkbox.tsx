type Props = {
  isChecked: boolean;
  onChange: () => void;
};

export function Checkbox({ isChecked, onChange }: Props) {
  return <input type="checkbox" checked={isChecked} onChange={onChange} />;
}
