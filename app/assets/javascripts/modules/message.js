$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
        `<div class="message_box" data-message-id=${message.id}>
          <div class="message_field_info">
            <div class="message_field_info__name">
              ${message.user_name}
            </div>
            <div class="message_field_info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message_box" data-message-id=${message.id}>
        <div class="message_field_info">
          <div class="message_field_info__name">
            ${message.user_name}
          </div>
          <div class="message_field_info__date">
            ${message.created_at}
          </div>
          </div>
        <div class="Message">
          <p class="Message__content">
            ${message.content}
          </p>
      </div>
    </div>`
    return html;
    };
  }
  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Message__field').append(html);
      $('form')[0].reset();
      $('.Message__field').animate({ scrollTop: $('.Message__field')[0].scrollHeight});
      $('.Form__submit').prop("disabled", false);
      
      
    })
    .fail(function(data) {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  });
  
});
