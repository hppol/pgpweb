document.addEventListener("DOMContentLoaded", () => {
  const memoInput = document.getElementById("memo-input");
  const memoList = document.getElementById("memo-list");
  const addButton = document.getElementById("add-button");

  // localStorage에서 저장된 메모 불러오기
  function loadMemos() {
    const memos = JSON.parse(localStorage.getItem("memos")) || [];
    memoList.innerHTML = "";
    memos.forEach((memo, index) => {
      const li = document.createElement("li");
      li.textContent = memo;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "삭제";
      deleteButton.onclick = () => deleteMemo(index);
      li.appendChild(deleteButton);
      memoList.appendChild(li);
    });
  }

  // 메모 추가하기
  addButton.addEventListener("click", () => {
    const memoText = memoInput.value.trim();
    if (memoText) {
      const memos = JSON.parse(localStorage.getItem("memos")) || [];
      memos.push(memoText);
      localStorage.setItem("memos", JSON.stringify(memos));
      memoInput.value = ""; // 입력창 초기화
      loadMemos(); // 메모 목록 갱신
    }
  });

  // 메모 삭제하기
  function deleteMemo(index) {
    const memos = JSON.parse(localStorage.getItem("memos")) || [];
    memos.splice(index, 1); // 해당 인덱스의 메모 삭제
    localStorage.setItem("memos", JSON.stringify(memos));
    loadMemos(); // 메모 목록 갱신
  }

  // 초기 메모 불러오기
  loadMemos();
});
