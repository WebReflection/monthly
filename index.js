var monthly = (function () {'use strict';
  /**
   * ISC License
   *
   * Copyright (c) 2018, Andrea Giammarchi, @WebReflection
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
   * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   * PERFORMANCE OF THIS SOFTWARE.
   */
  var DIM = 2;
  try {
    var os = require('os');
    if (/\bMicrosoft\b/.test(os.release()) || os.platform() === 'win32')
      DIM = 90;
  } catch(meh) {}
  return function monthly(options) {
    var date = options.date;
    var holidays = options._holidays || {country: [], region: []};
    var dim = [].concat(
      options.dim || [],
      holidays.region
    ).map(asDate, date);
    var underline = [].concat(
      options.underline || [],
      holidays.country
    ).map(asDate, date);
    var highlight = [].concat(options.highlight == null ?
                      currentDate(date) :
                      options.highlight
                    ).concat(options.invert || []).map(asDate, date);
    var blink = [].concat(options.blink || []).map(asDate, date);
    var bold = [].concat(options.bold || []).map(asDate, date);
    var locale = options.locale || 'en';
    var freeDay = [].concat(options.freeDay == null ? [0,6] : options.freeDay);
    var startDay = options.startDay == null ? 1 : options.startDay;
    var table = !!options.table;
    var gap = table ? 16 : 10;
    var month = date.toLocaleDateString(locale, {month: 'long'}) +
                (options.year ? (' ' + date.getFullYear()) : '');
    var header =  [
      ' '.repeat(gap - Math.ceil(month.length / 2)),
      ' '.repeat(gap - Math.floor(month.length / 2))
    ].join(month);
    var output = [];
    if (table)
      output.push(special(DIM, '┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
    output.push(
      (table ? special(DIM, '┃ ') : '') +
      special(7, header) +
      (table ? special(DIM, ' ┃') : '')
    );
    if (table)
      output.push(special(DIM, '┣━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┫'));
    var base = new Date('1978-05-17'); // my birthday
    reach(base, 0);
    base.setDate(base.getDate() + startDay);
    var line = [];
    for (var i = 0; i < 7; i++) {
      line.push(special(DIM, day(base, locale)));
      base.setDate(base.getDate() + 1);
    }
    output.push(
      (table ? special(DIM, '┃ ') : '') +
      line.join(table ? special(DIM, ' ┃ ') : ' ') +
      (table ? special(DIM, ' ┃') : '')
    );
    if (table)
      output.push(special(DIM, '┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫'));
    base.setTime(date.getTime());
    base.setDate(1);
    reach(base, startDay);
    for (var i = 0; i < 6; i++) {
      output.push(
        (table ? special(DIM, '┃ ') : '') +
        row(
          base, date, freeDay,
          highlight, blink, bold, dim, underline
        ).join(table ? special(DIM, ' ┃ ') : ' ') +
        (table ? special(DIM, ' ┃') : '')
      );
      if (i !== 5 && table)
        output.push(special(DIM, '┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫'));
    }
    if (table)
      output.push(special(DIM, '┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛'));
    return output;
  };

  function asDate(num) {
    if (typeof num === 'number') {
      var date = new Date(this.getTime());
      date.setDate(num);
      return date;
    } else if (typeof num === 'string') {
      return new Date(num);
    }
    return num;
  }

  function currentDate(date) {
    var now = new Date;
    return  now.getMonth() === date.getMonth() &&
            now.getFullYear() === date.getFullYear() ?
              [date.getDate()] : [];
  }

  function day(date, locale) {
    return date.toLocaleDateString(
      locale,
      {weekday: 'short'}
    ).slice(0, 2);
  }

  function reach(date, day) {
    while (date.getDay() !== day)
      date.setDate(date.getDate() - 1);
  }

  function similar(date) {
    return  this.getDate() === date.getDate() &&
            this.getMonth() === date.getMonth() &&
            this.getFullYear() === date.getFullYear();
  }

  function special(num, str) {
    return '\x1B[' + num + 'm' + str + '\x1B[0m';
    //     enable                       disable
  }

  function row(
    date, source, freeDay,
    highlight, blink, bold, dim, underline
  ) {
    var line = [];
    while (line.length < 7) {
      if (source.getMonth() === date.getMonth()) {
        var day = (' ' + date.getDate()).slice(-2);
        if (bold.some(similar, date))
          day = special(1, day);
        if (
          -1 < freeDay.indexOf(date.getDay()) ||
          dim.some(similar, date)
        )
          day = special(DIM, day);
        if (underline.some(similar, date))
          day = special(4, day);
        if (blink.some(similar, date))
          day = special(5, day);
        if (highlight.some(similar, date))
          day = special(7, day);
        line.push(day);
      }
      else
        line.push('  ');
      date.setDate(date.getDate() + 1);
    }
    return line;
  }
}());
