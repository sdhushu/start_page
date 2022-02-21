export default function goPage(num:number,data:any) {
    // num 每页条数
    // size 总页数
    let f;
    let r = []
    for (f =0;f<data.length;) {
        r.push(data.slice(f,f+=num))
    }
    return r
}