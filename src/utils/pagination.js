const paginationLogic =(currenPage, residents)=>{
    const residentsForPage=20;
    const totalPages=Math.ceil(residents.length / residentsForPage);
    const sliceEnd=currenPage*residentsForPage+1;
    const sliceStart=sliceEnd-residentsForPage;
    const residentsInCurrenPages=residents.slice(sliceStart,sliceEnd);
    const pages=[];
    for(let i=1;i<=totalPages;i++){
        pages.push(i);
    }
    return {pages, residentsInCurrenPages};
   
}
export {paginationLogic};