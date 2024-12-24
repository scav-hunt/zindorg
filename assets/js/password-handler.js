function hash1(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

function hash2(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 0x85ebca77);
      h2 = Math.imul(h2 ^ ch, 0xc2b2ae3d);
    }
    h1 ^= Math.imul(h1 ^ (h2 >>> 15), 0x735a2d97);
    h2 ^= Math.imul(h2 ^ (h1 >>> 15), 0xcaf649a9);
    h1 ^= h2 >>> 16; h2 ^= h1 >>> 16;
      return 2097152 * (h2 >>> 0) + (h1 >>> 11);
};

function submitPromoCode() {
    let pwdInput = document.getElementById("passwordInput");
    let input = pwdInput.value;
    let clean = input.toUpperCase();
    clean = clean.replace(/\s/g, '');
    let hash = hash1(clean);

    let pwds = [{"hash":7308405096043465},{"hash":3895574163732429},{"hash":54721403541480},{"hash":1695071331695533},{"hash":2840711451450435},{"hash":6704816167701486},{"hash":3974110432473951},{"hash":5596118776312987},{"hash":2236275141522168}];

    for (let i = 0; i < pwds.length; i++) {
        let pass = pwds[i]["hash"];

        if (hash === pass) {
            let hsh = hash.toString();
            let slug = hash2(hsh);
            window.location.href = "/zindorg/" + slug;
            break;
        }
    }

};
