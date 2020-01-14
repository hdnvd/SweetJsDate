// @flow
import jMoment from "moment-jalaali";
import moment from "moment";
export default class SweetDate{
    static getCurrentTimeJMomentFromDateTimeStamp(TimeStamp)
    {
        let DateFormat="jYYYY/jMM/jDD";
        let DateString=jMoment.utc(moment.unix(TimeStamp)).format(DateFormat);
        const JalaliMoment=jMoment(DateString, DateFormat);
        return JalaliMoment;
    }
    static getMonthName(monthNum){
        monthNum=monthNum*1;
        switch (monthNum) {
            case 1:
                return 'فروردین';
            case 2:
                return 'اردیبهشت';
            case 3:
                return 'خرداد';
            case 4:
                return 'تیر';
            case 5:
                return 'مرداد';
            case 6:
                return 'شهریور';
            case 7:
                return 'مهر';
            case 8:
                return 'آبان';
            case 9:
                return 'آذر';
            case 10:
                return 'دی';
            case 11:
                return 'بهمن';
            case 12:
                return 'اسفند';

        }
    }
}
