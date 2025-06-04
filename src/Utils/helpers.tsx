
export function isFalsy($false: any) {
    if ($false != null) {
        if (typeof $false == "string") $false = $false.trim();
        if (typeof $false == "object" && Object.keys($false).length === 0) $false = undefined;
    }
    let falsyvalues: any = ['', 0, '0', false, null, 'null', undefined, 'undefined'];
    return falsyvalues.includes($false);
}
