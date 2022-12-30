// import { ema } from 'framework';

Strategy({
  onStart() {
  },
  getOptions() {
    console.log('lifecycle:getOptions');
    this.option('period', 'period length, same as --period_length', String, '2m');
    this.option('period_length', 'period length, same as --period', String, '2m');
    this.option('min_periods', 'min. number of history periods', Number, 52);
    this.option('trend_ema', 'number of periods for trend EMA', Number, 26);
    this.option('neutral_rate', 'avoid trades if abs(trend_ema) under this float (0 to disable, "auto" for a variable filter)', Number, 'auto');
    this.option('oversold_rsi_periods', 'number of periods for oversold RSI', Number, 14);
    this.option('oversold_rsi', 'buy when RSI reaches this value', Number, 10);
  },
  onPeriod(s) {
    // log ema to global
    my.ema({ 
      key: 'trend_ema', 
      length: 0,
    });
    
    console.log('<<<<<<<<<<', this.period);
    // console.log('<<<<<<<<<<<<', s.period);
  },
  calculate(s) {
    // console.log('<<<<<<<<<<<<', s.options);
    // console.log('lifecycle:calculate');
  },
  orderExecuted() {
    // console.log('lifecycle:orderExecuted');
  },
  onReport() {
    // console.log('lifecycle:onReport');
  },
  onExit() {
    // console.log('lifecycle:onExit');
  }
})
