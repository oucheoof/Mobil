function renderPostit() {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.id = "postit";
    div.innerHTML = `
    <ul>
        <li>#1890</li>
        <li>#1930</li>
        <li>#1990</li>
    </ul>
`;
}

renderPostit();