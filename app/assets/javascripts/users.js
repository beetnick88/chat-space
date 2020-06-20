$(function() {
  function addUser(user) {
    let html = `
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="chat-group-user__btn__add" chat-group-user__btn" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>
                `;
    $("#UserSearchResult").append(html);
  }
  
  function addNoUser() {
    let html = `
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">ユーザーが見つかりません</p>
                </div>
                `;
    $("#UserSearchResult").append(html);
  }
  function addMember(name, id) {
    let html = `
                <div class="chat-group-user">
                  <p class="chat-group-user__name">${name}</p>
                  <input name="group[user_ids][]" type="hidden" value="${id}" />
                  <div class="chat-group-user__btn__remove chat-group-user__btn">削除</div>
                </div>
                `;
    $("#chat-group-users").append(html);
  }
  
  $("#UserSearch__field").on("keyup", function() {
    let input = $("#UserSearch__field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(users) {
      $("#UserSearchResult").empty();
      if (users.length !== 0) {
        users.forEach(function(user) {
          addUser(user); 
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
    })
    .fail(function() {
      alert("通信エラーです。ユーザーが表示できません。");
    });
  });
  $("#UserSearchResult").on("click", ".chat-group-user__btn__add", function() {
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    $(this).parent().remove();
    addMember(userName, userId);
  });
  $("#chat-group-users").on("click", ".chat-group-user__btn__remove", function() {
    $(this).parent().remove();
    

  });
});
