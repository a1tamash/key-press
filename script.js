const body = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
	body.innerHTML = `<div class="key">
                        <table>
                            <tr>
                                <th>Key </th>
                                <th>Code </th>
                                <th>Name </th>
                            </tr>
                            <tr>
                                <td>${e.key === " " ? "Space" : e.key} </td>
                                <td>${e.keyCode} </td>
                                <td>${e.code} </td>
                            </tr>
                        </table>
                        </div>`;
});
