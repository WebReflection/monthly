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
  var includes = [].includes || function (value) {
    return -1 < this.indexOf(value);
  };
  return function monthly(options) {
    var date = options.date;
    var highlight = [].concat(options.highlight == null ?
                      currentDate(date) :
                      options.highlight
                    ).concat(options.invert || []);
    var blink = [].concat(options.blink || []);
    var bold = [].concat(options.bold || []);
    var dim = [].concat(options.dim || []);
    var underline = [].concat(options.underline || []);
    var freeDay = [].concat(options.freeDay == null ? [0,6] : options.freeDay);
    var locale = options.locale || 'en';
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
    if (table) output.push('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓');
    output.push(
      (table ? '┃ ' : '') +
      special(7, header) +
      (table ? ' ┃' : '')
    );
    if (table) output.push('┣━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┫');
    var base = new Date(263952000000); // I was born this week
    base.setDate(base.getDate() + startDay);
    var line = [];
    for (var i = 0; i < 7; i++) {
      line.push(special(2, day(base)));
      base.setDate(base.getDate() + 1);
    }
    output.push(
      (table ? '┃ ' : '') +
      line.join(table ? ' ┃ ' : ' ') +
      (table ? ' ┃' : '')
    );
    if (table) output.push('┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫');
    base.setTime(date.getTime());
    base.setDate(1);
    while (base.getDay() !== startDay)
      base.setDate(base.getDate() - 1);
    for (var i = 0; i < 6; i++) {
      output.push(
        (table ? '┃ ' : '') +
        row(
          base, date, freeDay,
          highlight, blink, bold, dim, underline
        ).join(table ? ' ┃ ' : ' ') +
        (table ? ' ┃' : '')
      );
      if (i !== 5 && table)
        output.push('┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫');
    }
    if (table) output.push('┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛');
    return output;
  };

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
        var dateNum = date.getDate();
        var day = (' ' + dateNum).slice(-2);
        if (includes.call(bold, dateNum))
          day = special(1, day);
        if (
          includes.call(dim, dateNum) ||
          includes.call(freeDay, date.getDay())
        )
          day = special(2, day);
        if (includes.call(underline, dateNum))
          day = special(4, day);
        if (includes.call(blink, dateNum))
          day = special(5, day);
        if (includes.call(highlight, dateNum))
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
