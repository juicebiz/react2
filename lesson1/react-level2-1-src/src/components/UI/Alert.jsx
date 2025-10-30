export default function Alert({ 
  variant = 'default',
  children
}){
  return <div className={`alert alert-${variant}`}>
    { children }
  </div>;
}