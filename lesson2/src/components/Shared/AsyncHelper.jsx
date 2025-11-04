import Loader from "@/components/UI/Loader";
import E404 from "../Errors/E404";

const status2text = {
  0: 'Unknown error',
  400: 'Bad Request',
  404: 'Page not found',
  500: 'Server is tired'
}

export default function AsyncHelper({ 
  asyncData, 
  render, 
  idleRender = () => null,
  loaderRender = () => <Loader />, 
  global404 = false 
}) {
  const { idle, pending, data, error } = asyncData;
  const isReal404 = error?.status === 404 && global404;

  return <div>
    { idle && idleRender() }
    { pending && loaderRender() }
    { error && isReal404 && <E404 /> }
    { error && !isReal404 &&
      <div className="alert alert-danger">
        { status2text[error.status ?? 0] ?? status2text[0] }        
      </div> 
    }
    { data && render(data) }
  </div>
}