/**
 * Created with IntelliJ IDEA.
 * User: Robert Broomandan
 * Date: 5/14/12
 * Time: 2:52 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('Weather.web.util.Util',
    {
        statics:{

            isValidZipCode:function (value) {
                var re = /^\d{5}([\-]\d{4})?$/;
                return (re.test(value));
            }
        }
    }
);

