function renderPostit() {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.id = "postit";
    div.innerHTML = `
    <ul>
        <li>#2001</li>
        <li>#2002</li>
        <li>#2003</li>
        <li>#2004</li>
    </ul>
`;
}

renderPostit();