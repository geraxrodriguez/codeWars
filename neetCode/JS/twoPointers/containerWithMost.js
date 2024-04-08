var maxArea = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++){
        let bar1 = i;
        let bar2 = i + 1
        while (bar2 < height.length) {
            const height1 = height[bar1]
            const height2 = height[bar2]
            const water = Math.min(height1, height2) * Math.abs(bar1 - bar2)
            max = Math.max(max, water)
            bar2 += 1;
        }
    }

    return max
}
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1
    let max = 0;
    while (l < r) {
        const w = Math.abs(l - r) * Math.min(height[l], height[r]);
        max = Math.max(max, w);
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return max
};