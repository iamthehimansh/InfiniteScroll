function InfiniteScroll(ref,OnScroll=()=>{},distance="100px",root=document.body){
    // 
    let observer = new IntersectionObserver(async(entries, observer)=>{
        if(!entries[0].isIntersecting) return
        await onScroll();
        observer.unobserve(entries[0].target)
        observer.observe(ref.current.lastChild)
        
    }, {
        root,
        rootMargin: distance,
        threshold: 1.0
    });
    observer.observe(ref.current.lastChild)
}


module.exports = InfiniteScroll;