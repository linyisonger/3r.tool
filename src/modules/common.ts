/**
 * 深克隆
 * @param obj 
 */
export function cloneDeep<T>(obj: T) {
    if (obj instanceof Int8Array) return Int8Array.from(obj) as T
    if (obj instanceof Uint8Array) return Uint8Array.from(obj) as T
    if (obj instanceof Uint8ClampedArray) return Uint8ClampedArray.from(obj) as T
    if (obj instanceof Int16Array) return Int16Array.from(obj) as T
    if (obj instanceof Uint16Array) return Uint16Array.from(obj) as T
    if (obj instanceof Int32Array) return Int32Array.from(obj) as T
    if (obj instanceof Uint32Array) return Uint32Array.from(obj) as T
    if (obj instanceof Float32Array) return Float32Array.from(obj) as T
    if (obj instanceof Float64Array) return Float64Array.from(obj) as T
    if (obj instanceof ArrayBuffer) return new Int8Array(obj).buffer as T
    if (obj instanceof Set) return new Set(obj.values()) as T
    if (obj instanceof RegExp) return new RegExp(obj) as T
    if (obj instanceof Date) return new Date(+obj) as T
    
    if (typeof obj === "object") {
        let res = (Array.isArray(obj) ? [] : {}) as T
        for (const key in obj) {
            res[key] = cloneDeep(obj[key])
        }
        return res
    }
    return obj
}