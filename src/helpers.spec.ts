import expect from '.';
import type { NotHelper, ToBeHelper, ArgsHelper, ParamHelper, ParamFunctionHelper, EmptyFunctionHelper } from './helpers.d';

expect<NotHelper<true, true, false>>().toEqual(true);
