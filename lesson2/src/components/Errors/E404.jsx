import { Link } from "react-router";

export default function E404({ text = 'Page not found' }) {

  return <div>
    <h1>Error 404</h1>
    <div className="alert alert-warning">{ text }</div>
    <div>
      Try start from home <Link to="/">page</Link>
    </div>
  </div>
}