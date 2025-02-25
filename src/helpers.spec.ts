import expect from '.';
import type { ExtendsHelper, BeHelper, ArgsHelper, ParamHelper, ParamFunctionHelper, EmptyFunctionHelper } from './helpers.d';

expect<ExtendsHelper<true, true, false>>().equal(true);
