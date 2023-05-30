export function FilterForm(users) {
  return (
    <form method="POST">
      <div className="inline-form"><small>Contains word</small></div>
      <div className="inline-form"><small>Orders by</small></div>
      <br />
      <div className="inline-form"><small>Status</small></div>
      <div className="inline-form"><small>Priority</small></div>
      <div className="inline-form"><small>Unassigned</small></div>
      <div className="inline-form"><small>Assigned to</small></div>
      <div className="inline-form"><small>Created by</small></div>
      <button className="btn-search-filter" type="submit"><i className='bx bx-search-alt-2'></i> Search</button>
    </form>
  )
}