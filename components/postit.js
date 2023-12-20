function renderPostit() {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.id = "postit";
    div.innerHTML = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
`;
}

renderPostit();