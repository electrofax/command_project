const React = require("react");
const Layout = require("./Layout");

function Form({ user }) {
  return (
    <Layout user={user}>
      <div>
        <div>
          <h4>
            Привет, Имя Фамилия! И добро пожаловать в команду Высокогорья!
            Впереди нас ждет интересное путешествие в мир нашей компании, и
            самым главным проводником будет- Имя Фамилия Мы подготовили для тебя
            чек-лист на первый день. Процесс выполнения будет сохраняться,
            поэтому ты можешь закрывать пункты в удобном для тебя порядке.
          </h4>
        </div>
          <form method="post" action="input5.php">
            <p><b>С какими операционными системами вы знакомы?</b></p>
            <p><input type="checkbox" name="option1" value="a1" checked>Windows 95/98<Br>
            <input type="checkbox" name="option2" value="a2">Windows 2000<Br>
            <input type="checkbox" name="option3" value="a3">System X<Br> 
            <input type="checkbox" name="option4" value="a4">Linux<Br> 
            <input type="checkbox" name="option5" value="a5">X3-DOS</p>
            <p><input type="submit" value="Отправить"></p>
  </form>
      </div>
    </Layout>
  );
}

module.exports = Form;
