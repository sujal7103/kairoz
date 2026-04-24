const Titlebar = () => {
  return (
    <div className="kairoz-titlebar">
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <div style={{width:14, height:14, background:'#fff'}}/>
        <span style={{fontSize:14, fontWeight:600, letterSpacing:'-0.015em'}}>Kairoz</span>
      </div>
      <div style={{display:'flex', gap:2, marginLeft:16}}>
        <button className="kairoz-btn kairoz-btn-ghost kairoz-btn-sm">File</button>
        <button className="kairoz-btn kairoz-btn-ghost kairoz-btn-sm">Edit</button>
        <button className="kairoz-btn kairoz-btn-ghost kairoz-btn-sm">View</button>
        <button className="kairoz-btn kairoz-btn-ghost kairoz-btn-sm">Help</button>
      </div>
      <div style={{flex:1, display:'flex', justifyContent:'center'}}>
        <div style={{display:'flex', alignItems:'center', gap:6, height:22, padding:'0 10px', background:'#0a0a0a', border:'1px solid #1e1e1e', borderRadius:4, minWidth:320, color:'#585858', fontSize:11}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="21" y2="21"/></svg>
          <span>Search or jump to…</span>
          <kbd className="kairoz-kbd" style={{marginLeft:'auto'}}>⌘ K</kbd>
        </div>
      </div>
      <div style={{display:'flex', gap:4, alignItems:'center'}}>
        <button className="kairoz-btn kairoz-btn-icon" style={{width:24, height:24}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        </button>
        <div className="kairoz-avatar">A</div>
      </div>
    </div>
  );
};
Object.assign(window, { Titlebar });
