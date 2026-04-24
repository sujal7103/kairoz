const MainPanel = () => {
  const rows = [
    { id: 'PRJ-001', name: 'Quarterly roadmap', owner: 'A. Chen', status: 'active', updated: '2m', progress: 74 },
    { id: 'PRJ-002', name: 'Migration plan', owner: 'J. Doe', status: 'review', updated: '12m', progress: 41 },
    { id: 'PRJ-003', name: 'API consolidation', owner: 'M. Kerr', status: 'active', updated: '1h', progress: 88 },
    { id: 'PRJ-004', name: 'Billing overhaul', owner: 'A. Chen', status: 'draft', updated: '3h', progress: 12 },
    { id: 'PRJ-005', name: 'Observability rework', owner: 'S. Park', status: 'blocked', updated: '5h', progress: 56 },
    { id: 'PRJ-006', name: 'Customer portal v2', owner: 'R. Patel', status: 'active', updated: '1d', progress: 33 },
    { id: 'PRJ-007', name: 'Search index refresh', owner: 'J. Doe', status: 'archived', updated: '4d', progress: 100 },
  ];
  const statusMap = {
    active:   { dot: 'success', label: 'Active' },
    review:   { dot: 'warning', label: 'In review' },
    draft:    { dot: 'info', label: 'Draft' },
    blocked:  { dot: 'error', label: 'Blocked' },
    archived: { dot: 'success', label: 'Archived' },
  };

  return (
    <section style={{flex:1, display:'flex', flexDirection:'column', minWidth:0, background:'#000'}}>
      <div className="kairoz-tabbar">
        <button className="kairoz-tab is-active">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>
          Projects
          <span className="kairoz-badge" style={{marginLeft:4}}>7</span>
        </button>
        <button className="kairoz-tab">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Activity
        </button>
        <button className="kairoz-tab">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Schedules
        </button>
        <div style={{flex:1}}/>
        <button className="kairoz-btn kairoz-btn-ghost kairoz-btn-sm" style={{margin:'auto 4px'}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New
        </button>
      </div>

      {/* Toolbar */}
      <div style={{height:40, padding:'0 16px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid #141414', flexShrink:0}}>
        <input className="kairoz-input kairoz-input-sm" placeholder="Filter projects…" style={{width:240, height:22}}/>
        <span className="kairoz-pill kairoz-pill-active">Owner: any</span>
        <span className="kairoz-pill">Status: any</span>
        <span className="kairoz-pill">Updated: 7d</span>
        <div style={{flex:1}}/>
        <span className="mono" style={{fontSize:11, color:'#585858'}}>7 of 7</span>
        <div className="kairoz-divider-v" style={{height:16}}/>
        <button className="kairoz-btn kairoz-btn-icon" style={{width:22, height:22}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <button className="kairoz-btn kairoz-btn-icon" style={{width:22, height:22}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        </button>
      </div>

      {/* Table */}
      <div style={{flex:1, overflow:'auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'86px 1fr 140px 120px 120px 60px', padding:'6px 16px', fontSize:10, textTransform:'uppercase', letterSpacing:'0.08em', color:'#585858', fontWeight:600, borderBottom:'1px solid #141414', position:'sticky', top:0, background:'#000'}}>
          <span>ID</span><span>Name</span><span>Owner</span><span>Status</span><span>Progress</span><span style={{textAlign:'right'}}>Updated</span>
        </div>
        {rows.map((r, i) => {
          const st = statusMap[r.status];
          return (
            <div key={r.id} style={{display:'grid', gridTemplateColumns:'86px 1fr 140px 120px 120px 60px', padding:'7px 16px', fontSize:12, alignItems:'center', borderBottom:'1px solid #141414', color:'#aaa', cursor:'pointer', background: i===2 ? 'rgba(255,255,255,0.04)' : 'transparent'}}>
              <span className="mono" style={{color:'#585858', fontSize:11}}>{r.id}</span>
              <span style={{color:'#fff'}}>{r.name}</span>
              <span>{r.owner}</span>
              <span style={{display:'flex', alignItems:'center', gap:6}}>
                <span className={'kairoz-dot kairoz-dot-'+st.dot}></span>
                {st.label}
              </span>
              <span style={{display:'flex', alignItems:'center', gap:8}}>
                <div className="kairoz-progress" style={{flex:1, height:3}}>
                  <div className="kairoz-progress-bar" style={{width: r.progress+'%'}}/>
                </div>
                <span className="mono" style={{fontSize:10, color:'#585858', width:28, textAlign:'right'}}>{r.progress}%</span>
              </span>
              <span className="mono" style={{fontSize:10, color:'#585858', textAlign:'right'}}>{r.updated}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
Object.assign(window, { MainPanel });
