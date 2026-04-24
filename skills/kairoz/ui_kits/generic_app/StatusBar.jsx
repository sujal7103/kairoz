const StatusBar = () => {
  return (
    <footer className="kairoz-statusbar">
      <span style={{display:'flex', alignItems:'center', gap:6}}>
        <span className="kairoz-dot kairoz-dot-success"></span>
        Connected
      </span>
      <span style={{color:'#333'}}>·</span>
      <span>us-east-1</span>
      <span style={{color:'#333'}}>·</span>
      <span>main</span>
      <span style={{marginLeft:'auto', display:'flex', alignItems:'center', gap:12}}>
        <span>7 projects</span>
        <span style={{color:'#333'}}>·</span>
        <span>Sync 12:04</span>
        <span style={{color:'#333'}}>·</span>
        <span>v0.1.4</span>
      </span>
    </footer>
  );
};
Object.assign(window, { StatusBar });
