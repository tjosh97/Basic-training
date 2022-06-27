function calculateFrequency(string) {
string = string.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, "");
const counts = {};
for (let char of string.toLowerCase()) {
    counts[char] = counts[char] + 1 || 1;
}

return (counts);
}
