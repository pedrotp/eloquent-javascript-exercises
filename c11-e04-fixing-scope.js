specialForms["set"] = function(args, env) {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Bad use of set");
  }
  else if (Object.prototype.hasOwnProperty.call(env, args[0].name)) {
    var value = evaluate(args[1], env);
    env[args[0].name] = value;
    return value;
  }
  else {
    if (Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(env), args[0].name)) {
      var value = evaluate(args[1], env);
      Object.getPrototypeOf(env)[args[0].name] = value;
      return value;
    }
    else {
      throw new ReferenceError("Undefined variable: " + args[0].name);
    }
  }
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError