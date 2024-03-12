!function menu(){
    document.addEventListener('click',(ev)=>{
        ev.stopPropagation();
        ev.preventDefault();
        const node = ev.composedPath().find(n=>n.dataset && 'page' in n.dataset);
        if(node){
            const {page} =node.dataset
            const url = `./${page}.js`
            import(url).then(m=>{
                m.default()
            })
        }

    })
}()