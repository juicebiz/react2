import useSettings from "@/hooks/useSettings";

export default function Loader(){
  const settings = useSettings();
  const themeClass = settings.theme === 'light' ? 'primary' : 'light';

  return <div className={`spinner-border text-${themeClass}`} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>;
}