export default function DataTable({ 
  data, 
  cellRender = ({ value }) => value
}){
  return <table className="table table-bordered table-hover">
    <tbody>
      { data.map((item,i) => <tr key={i}>
        { Object.entries(item).map(([key,value]) => <td key={key}>
          { cellRender({ item, key, value }) }
        </td>)}
      </tr>) }
    </tbody>
  </table>
}