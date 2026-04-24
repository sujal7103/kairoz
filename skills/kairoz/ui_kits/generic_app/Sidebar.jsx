const Sidebar = () => {
  const sections = [
    { label: 'Workspace', items: [
      { icon: 'home', name: 'Overview', active: false },
      { icon: 'layers', name: 'Projects', active: true, badge: '12' },
      { icon: 'users', name: 'Members', active: false },
      { icon: 'activity', name: 'Activity', active: false },
    ]},
    { label: 'Library', items: [
      { icon: 'folder', name: 'Documents', active: false },
      { icon: 'box', name: 'Assets', active: false },
      { icon: 'tag', name: 'Tags', active: false },
    ]},
  ];
  return (
    <aside style={{width:220, background:'#000', borderRight:'1px solid #1e1e1e', display:'flex', flexDirection:'column', flexShrink:0}}>
      <div className="kairoz-panel-header">
        <span className="kairoz-panel-title">Navigation</span>
        <button className="kairoz-btn kairoz-btn-icon" style={{width:22, height:22}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>
      <div style={{padding:'8px 8px 12px', overflowY:'auto', flex:1}}>
        {sections.map((sec, si) => (
          <div key={si} style={{marginBottom:10}}>
            <div style={{padding:'4px 8px', fontSize:10, textTransform:'uppercase', letterSpacing:'0.08em', color:'#585858', fontWeight:600}}>{sec.label}</div>
            {sec.items.map((it, ii) => (
              <div key={ii} className={'kairoz-list-item' + (it.active ? ' is-selected' : '')} style={{padding:'5px 8px', fontSize:12, borderRadius:3}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{opacity: it.active ? 1 : 0.7}}>
                  {icon(it.icon)}
                </svg>
                <span>{it.name}</span>
                {it.badge && <span className="kairoz-badge" style={{marginLeft:'auto'}}>{it.badge}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{padding:8, borderTop:'1px solid #141414'}}>
        <div style={{display:'flex', alignItems:'center', gap:8, padding:'6px 8px', borderRadius:3, background:'#0a0a0a', border:'1px solid #141414'}}>
          <div className="kairoz-avatar">JD</div>
          <div style={{flex:1, minWidth:0}}>
            <div style={{fontSize:11, fontWeight:500, color:'#fff', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>Acme Workspace</div>
            <div className="mono" style={{fontSize:10, color:'#585858'}}>4 members</div>
          </div>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#585858" strokeWidth="1.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
    </aside>
  );
};
function icon(name) {
  switch (name) {
    case 'home': return <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>;
    case 'layers': return <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>;
    case 'users': return <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>;
    case 'activity': return <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>;
    case 'folder': return <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>;
    case 'box': return <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></>;
    case 'tag': return <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7" y2="7"/></>;
    default: return null;
  }
}
Object.assign(window, { Sidebar });
