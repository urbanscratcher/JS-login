import day from 'dayjs';

const FormatData = {


};

export default FormatData;




/* 
const Util = {
    nullifyUndifined: (data) => {
      for (const key of Object.keys(data)) {
        if (key in data) {
          data[key] = data[key] === undefined ? null : data[key];
        }
      }
    },
  
    formatDate: (
      value,
      defaultValue = ''
    ) => {
      if (value === undefined || value === null) return defaultValue;
      return moment(value).format('YYYY-MM-DD');
    },
  
    formatYear: (
      value,
      defaultValue = ''
    ) => {
      if (value === undefined || value === null) return defaultValue;
      if (typeof value === 'string') {
        return moment(value).format('YYYY');
      } else {
        return value.format('YYYY');
      }
    },
  
    formatDateTime: (
      value,
      defaultValue = ''
    ) => {
      if (value === undefined || value === null) return defaultValue;
      return moment(value).format('YYYY.MM.DD HH:mm:ss');
    },
  
    formatDateTimeHHMM: (
      value,
      defaultValue = ''
    ) => {
      if (value === undefined || value === null) return defaultValue;
      if (typeof value === 'string') {
        return moment(value).format('YYYY-MM-DD HH:mm');
      } else {
        return value.format('YYYY-MM-DD HH:mm');
      }
    },
  
    formatDateTimeHHMMSS: (
      value,
      defaultValue = ''
    ) => {
      if (value === undefined || value === null) return defaultValue;
      if (typeof value === 'string') {
        return moment(value).format('YYYY-MM-DD HH:mm:ss');
      } else {
        return value.format('YYYY-MM-DD HH:mm:ss');
      }
    },
  
    formatDateRelatively: (
      value,
      defaultValue = ''
    ) => {
      if (value === undefined || value === null) return defaultValue;
      if (typeof value === 'string') {
        return moment(value).fromNow();
      } else {
        return value.fromNow();
      }
    },
  
    formatNumber: (
      value,
      defaultValue = 0
    ) => {
      if (value !== undefined && value !== null) {
        if (typeof value === 'string') {
          value = value.replace(/,/gi, "");
        }
        return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      } else {
        return `${defaultValue}`;
      }
    },
  
    formatPhoneNumber: (phoneNumber) => {
      let cleaned = ('' + phoneNumber).replace(/\D/g, '');
  
      let matchNew = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
      let matchOld = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
      if (matchNew) {
        return matchNew[1] + '-' + matchNew[2] + '-' + matchNew[3]
      } else if (matchOld) {
        return matchOld[1] + '-' + matchOld[2] + '-' + matchOld[3]
      }
  
      return null
    },
  
    formatEncryptPhoneNumber: (phoneNumber) => {
      let cleaned = ('' + phoneNumber).replace(/\D/g, '');
  
      let matchNew = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
      let matchOld = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  
      if (matchNew) {
        let second_numbers = matchNew[2].substr(0, 1) + '**' + matchNew[2].substr(matchNew[2].length - 1, 1);
        let third_numbers = matchNew[3].substr(0, 1) + '**' + matchNew[3].substr(matchNew[3].length - 1, 1);
        return matchNew[1] + '-' + second_numbers + '-' + third_numbers
  
      } else if (matchOld) {
        let second_numbers = matchOld[2].substr(0, 1) + '*' + matchOld[2].substr(matchOld[2].length - 1, 1);
        let third_numbers = matchOld[3].substr(0, 1) + '**' + matchOld[3].substr(matchOld[3].length - 1, 1);
        return matchOld[1] + '-' + second_numbers + '-' + third_numbers
      }
  
      return null
    },
  
    parseNumbers(
      target,
      source,
      fields,
      defaultValue
    ) {
      for (const field of fields) {
        target[field] = source[field] ? Number(source[field]) : defaultValue;
      }
      return target;
    },
  
    compareMoments(a, b) {
      if (a && b) {
        return a > b ? 1 : -1;
      } else if (a) {
        return 1;
      } else if (b) {
        return -1;
      } else {
        return 0;
      }
    },
  
    isDefined: (arg) => {
      return typeof arg !== 'undefined' && arg !== null;
    },
  
    stringToMoment(value) {
      return value ? moment(value) : undefined;
    },
  
    stringToHTML(value) {
      let html = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
      return html.replace(/(https?:\/\/[^\s]+)/g, function (url) {
        return '<a href="' + url + '" target="_blank">' + url + '</a>';
      });
    },
  
    unescapeHtml: (s) => {
      if (!s) return "";
      return s.replace(/(&lt;)|(&gt;)|(&amp;)|(&quot;)/gm, function (match) {
        switch (match) {
          case "&lt;":
            return "<";
  
          case "&gt;":
            return ">";
  
          case "&amp;":
            return "&";
  
          case "&quot;":
            return "\"";
  
          default:
            return match;
        }
      });
    },
  
    todayDt: (format) => {
      return moment().format(format);
    },
  
    addDaysDt: (format, days) => {
      return moment().add(days, 'days').format(format);
    },
  
    // 만 14세 이하 여부 확인
    getYearsOld: (value, age = 0) => {
      if (value === undefined || value === null) return age;
      let year = '';
      let month = '';
      let day = '';
      if (typeof value === 'string') {
        year = moment(value).format('YYYY');
        month = moment(value).format('MM');
        day = moment(value).format('DD');
      } else {
        year = value.format('YYYY');
        month = value.format('MM');
        day = value.format('DD');
      }
      const today = new Date();
      const birthday = new Date(Number(year), Number(month) - 1, Number(day));
  
      age = today.getFullYear() - birthday.getFullYear();
  
      let birthMonth = birthday.getMonth();
      let thisMonth = today.getMonth();
  
      // 현재 월과 생일 월을 변수에 저장한다.
      let birthDate = birthday.getDate();
      let thisDate = today.getDate();
  
      if (birthMonth > thisMonth) {
        age = age - 1;
      }
      if (birthMonth === thisMonth) {
        if (birthDate >= thisDate) {
          age = age - 1;
        }
      }
  
      return age;
    },
  
    // 네프론 상태 가져오기
    getNeflonCondition: ({
      ds_line_status,
      ds_trash_status,
      ds_can_status,
      ds_control_status,
      ds_crusher_status,
      ds_device_status,
      ds_printer_status }) => {
      let condition = 'possible';
      // 용량 초과
      if (ds_trash_status === '02' || ds_can_status === '02') {
        condition = 'exceed';
      }
      // 사용 불가
      if (ds_line_status === '01' || ds_control_status === '01' || ds_crusher_status === '01' ||
        ds_device_status === '01' || ds_printer_status === '01' || ds_printer_status === '01' ||
        ds_printer_status === '02' || ds_printer_status === '03') {
        condition = 'impossible';
      }
      return condition;
    },
  
    // 네프론 상태 가져오기(위치 지도에서 사용)
    getNeflonConditionForMap: ({
      ds_line_status,
      ds_trash_status,
      ds_can_status,
      ds_control_status,
      ds_crusher_status,
      ds_device_status,
      ds_printer_status }) => {
      let condition = 'possible';
      // 용량 초과
      if (ds_trash_status === '02' || ds_can_status === '02') {
        condition = 'full';
      }
      // 사용 불가
      if (ds_line_status === '01' || ds_control_status === '01' || ds_crusher_status === '01' ||
        ds_device_status === '01' || ds_printer_status === '01' || ds_printer_status === '01' ||
        ds_printer_status === '02' || ds_printer_status === '03') {
        condition = 'breakdown';
      }
      return condition;
    },
  
    // 쿠키설정    
    setCookie: (idx) => {
      var todayDate = new Date();
      document.cookie = 'banner_' + idx + '=' + escape('Y') + '; expires=' + todayDate.toUTCString() + ';path=/';
    },
  
    // 쿠키 불러오기
    getCookie: (name) => {
      var obj = name + "=";
      var x = 0;
      while (x <= document.cookie.length) {
        var y = (x + obj.length);
        if (document.cookie.substring(x, y) === obj) {
          var endOfCookie = document.cookie.indexOf(";", y);
          if (endOfCookie === -1) endOfCookie = document.cookie.length;
          return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x === 0) break;
      }
      return "";
    }
  };
  
 */