<script>
let logined = false;
let phone = '';
let nickname = '新用户';
let avatarUrl = '';

//是否已经获取过昵称和头像
let got = false;

let reset = function() {
     this.logined = false;
     this.phone = '';
     this.nickname = '新用户';
     this.avatarUrl = '';
     this.got = false;
}

export default {
     logined,
     phone,
     nickname,
     avatarUrl,
     got,
     reset
}
</script>