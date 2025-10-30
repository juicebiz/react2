import Loader from "@/components/UI/Loader";

const status2text = {
  0: 'Unknown error',
  400: 'Bad Request',
  404: 'Page not found',
  500: 'Server is tired'
}

export default function AsyncHelper({ fetchResult, render }) {
  const { pending, data, error } = fetchResult;

  return <div>
    { pending && <Loader /> }
    { error && <div className="alert alert-danger">
      { status2text[error.status ?? 0] ?? status2text[0] }        
    </div> }
    { data && render(data) }
  </div>
}