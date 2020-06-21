$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message_box" data-message-id=${message.id}>
          <div class="message_field_info">
            <div class="message_field_info_name">
              ${message.user_name}
            </div>
            <div class="message_field_info_date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            - if message.content.present?
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

  let reloadMessages = function() {
    let last_message_id = $('.message_box:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Message__field').append(insertHTML);
        $('.Message__field').animate({ scrollTop: $('.Message__field')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 10000);
  });