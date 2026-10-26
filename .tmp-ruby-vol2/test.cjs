const fs = require("fs");
const { DefaultRubyVM } = require("./node_modules/@ruby/wasm-wasi/dist/node.cjs.js");

(async () => {
  const buf = fs.readFileSync("node_modules/ruby-head-wasm-wasi/dist/ruby+stdlib.wasm");
  const mod = await WebAssembly.compile(buf);
  const { vm } = await DefaultRubyVM(mod);
  const code = `require "stringio"
__asl = $stdout
$stdout = StringIO.new
puts "salom"
puts [1,2].inspect
__out = $stdout.string
$stdout = __asl
__out`;
  const r = vm.eval(code);
  console.log("captured:", JSON.stringify(r.toString()));
  const tests = [
    'require "benchmark"; Benchmark.realtime { 1 }.class.to_s',
    'require "json"; JSON.generate({a: 1})',
    'require "securerandom"; SecureRandom.uuid.length',
    'require "delegate"; SimpleDelegator.name',
    'require "erb"; ERB::Util.html_escape("<b>")',
    'require "logger"; Logger.name',
    'require "ostruct"; OpenStruct.name',
    'require "set"; Set.name',
    'require "time"; Time.now.class.to_s',
    'require "digest"; Digest::SHA256.hexdigest("a").length',
    'require "base64"; Base64.strict_encode64("salom")'
  ];
  for (const t of tests) {
    try {
      console.log(t.slice(0, 30), "=>", vm.eval(t).toString());
    } catch (e) {
      console.log(t.slice(0, 30), "ERR", String(e).slice(0, 100));
    }
  }
})().catch((e) => { console.error(e); process.exit(1); });
