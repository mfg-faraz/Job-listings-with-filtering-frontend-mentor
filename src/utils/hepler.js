export const filter = (conditions, array) => {
    return array.filter(x => {
        for (const key in conditions) {
            if (Object.hasOwnProperty.call(conditions, key)) {
                if(Array.isArray(x[key])){
                    console.log(x[key]);
                    const val =x[key].find(v=>v===conditions[key])
                    if(val)
                    return true

                }else{
                    if (x[key] === conditions[key]) { return true }
                }
            }
        }

    });
}