import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li = document.createElement("li");
  li.className = "list-row";

  //div生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // //未完了のToDoから削除
    deletFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //li以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //ulタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // 完了のリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
    // //完了に移動する
    // console.log(target);
    // const targetTxet = target.firstElementChild;
    // console.log(targetTxet);
    // // li.appendChild(targetExet);
    // document.getElementById("complete-area").appendChild(li);
  });

  //button(削除)タグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deletFromIncompleteList(deleteButton.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("imcomplete-list").appendChild(li);

  const button = document.createElement("button");
};

//未完了リストから指定の要素を削除
const deletFromIncompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
