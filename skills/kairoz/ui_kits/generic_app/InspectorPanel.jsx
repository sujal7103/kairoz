const InspectorPanel = () => {
  return (
    <aside style={{width:280, background:'#000', borderLeft:'1px solid #1e1e1e', display:'flex', flexDirection:'column', flexShrink:0}}>
      <div className="kairoz-panel-header">
        <span className="kairoz-panel-title">Inspector</span>
        <div style={{display:'flex', gap:2}}>
          <button className="kairoz-btn kairoz-btn-icon" style={{width:22, height:22}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      <div style={{padding:'12px 14px 16px', overflowY:'auto', flex:1}}>
        {/* Selection header */}
        <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:12}}>
          <span className="kairoz-dot kairoz-dot-success"></span>
          <span style={{fontSize:13, fontWeight:600, color:'#fff', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>API consolidation</span>
        </div>
        <div className="mono" style={{fontSize:10, color:'#585858', marginBottom:16}}>PRJ-003 · updated 1h ago</div>

        {/* Metadata card */}
        <div className="kairoz-card" style={{marginBottom:12}}>
          <div className="kairoz-card-header">
            <span className="label-upper" style={{fontSize:10}}>Details</span>
          </div>
          <div className="kairoz-card-body" style={{padding:'8px 12px 10px'}}>
            {[
              ['Owner', 'M. Kerr'],
              ['Status', 'Active'],
              ['Region', 'us-east-1'],
              ['Created', '2026-03-14'],
              ['Updated', '2026-04-18 09:23'],
            ].map(([k,v])=>(
              <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'4px 0', fontSize:11, borderBottom:'1px solid #141414'}}>
                <span style={{color:'#777'}}>{k}</span>
                <span className="mono" style={{color:'#fff'}}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress card */}
        <div className="kairoz-card" style={{marginBottom:12}}>
          <div className="kairoz-card-header">
            <span className="label-upper" style={{fontSize:10}}>Progress</span>
            <span className="mono" style={{marginLeft:'auto', fontSize:10, color:'#aaa'}}>88 / 100</span>
          </div>
          <div className="kairoz-card-body" style={{padding:'10px 12px 12px'}}>
            <div className="kairoz-progress" style={{marginBottom:8}}><div className="kairoz-progress-bar" style={{width:'88%'}}/></div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:6}}>
              {[['Tasks','24/28'], ['Reviews','6/6'], ['Blockers','0'], ['Days left','11']].map(([k,v])=>(
                <div key={k} style={{padding:'6px 8px', border:'1px solid #141414', borderRadius:3, background:'#0a0a0a'}}>
                  <div style={{fontSize:9, textTransform:'uppercase', letterSpacing:'0.08em', color:'#585858'}}>{k}</div>
                  <div className="mono" style={{fontSize:14, color:'#fff', marginTop:2, fontWeight:500}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{marginBottom:12}}>
          <div className="label-upper" style={{fontSize:10, marginBottom:6}}>Tags</div>
          <div style={{display:'flex', flexWrap:'wrap', gap:4}}>
            <span className="kairoz-pill">infrastructure</span>
            <span className="kairoz-pill">q2</span>
            <span className="kairoz-pill">engineering</span>
            <span className="kairoz-pill kairoz-pill-active">+ Add</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{display:'flex', gap:6}}>
          <button className="kairoz-btn kairoz-btn-primary" style={{flex:1}}>Open</button>
          <button className="kairoz-btn kairoz-btn-secondary">Share</button>
          <button className="kairoz-btn kairoz-btn-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
        </div>
      </div>
    </aside>
  );
};
Object.assign(window, { InspectorPanel });
