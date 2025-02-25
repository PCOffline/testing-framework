import expect from '.';
import type { NotHelper, BeHelper, ArgsHelper, ParamHelper, ParamFunctionHelper, EmptyFunctionHelper } from './helpers.d';

expect<NotHelper<true, true, false>>().equal(true);
