//* Utility types that use `infer`
//* Parameters<T>

/**
 * Obtain the parameters of a function type in a tuple
 */
type _Parameters
    /**
     * The typeParam passed in, must be some subtype of a call signature,
     * which can take any number of arguments of any types, and can
     * have any return type
     */
    <T extends (...args: any) => any>
        /**
         * As long as `T` matches a call signature, capture all of the args
         * (as a ...rest) parameter in a new tuple typeParam `P`
         */
        = T extends (...args: infer P) => any
            ? P // and then return the tuple
            : never; // or return never, if the condition is not matched

//* ConstructorParameters<T>
/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type _ConstructorParameters
    /**
     * The typeParam passed in, must be some subtype of a construct
     * signature.
     * 
     * The `abstract` keyword lets this also work with abstract classes,
     * which can potentially have an `abstract` constructor
     */
    <T extends abstract new (...args: any) => any>
        /**
         * As long as `T` matches a construct signature, capture all of the
         * args (as a ...rest) parameter in a new tuple typeParam `P`
         */
        = T extends abstract new (...args: infer P) => any
            ? P // and then return the tuple
            : never; // or return never, if the condition is not matched

//* ReturnType<T>
/**
 * Obtain the return type of a function type
 */
type _ReturnType
    /**
     * The typeParam passed in must be some subtype of a call signature
     */
    <T extends (...args: any) => any>
        /**
         * As long as `T` matches the call signature, capture the return type
         * in a new typeParam `R`
         */
        = T extends (...args: any) => infer R
            ? R // and then return it
            : any; // otherwise return any

//* InstanceType<T>
/**
 * Obtain the return type of a constructor function type
 */
type _InstanceType
    /**
     * The typeParam passed in must be some subtype of a construct signature
     */
    <T extends abstract new (...args: any) => any>
        /**
         * As long as `T` matches the construct signature, capture the return
         * type in a new typeParam `R`
         */
        = T extends abstract new (...args: any) => infer R
            ? R // and then return it
            : any; // otherwise return any

//* ThisParameterType<T> and OmitThisParameter<T>
/*
/**
 * Extracts the type of the 'this' parameter of a function type, or 'unknown'
 * if the function type has no 'this' parameter.
 */
type _ThisParameterType<T> 
    = T extends (this: infer U, ...args: never) => any
        ? U
        : unknown;
/**
 * Removes the 'this' parameter from a function type.
 */
type _OmitThisParameter<T>
    /**
     * If `ThisParameterType<T>` evaluates to `unknown`, it means one of two
     * things:
     * (1) `T` is not a call signature type
     * (2) `T` is a call signature type, with a `this` type of `undefined`
     * 
     * In either of these cases, we effectively short circuit, and return 
     * the `unknown`
     */
    = unknown extends ThisParameterType<T>
        ? T
        /**
         * In this branch, we know that `T` is a call signature, with a
         * non-undefined `this` type
         * 
         * Here we are inferring _both_ the tuple type representing the
         * arguments, _and_ the return type into two new typeParams, `A` and
         * `R`, respectively
         */
        : T extends (...args: infer A) => infer R
            /**
             * Here, we are effectively reconstructing the function 
             * _without_ 
             * the `this` type, using both of our `infer`red typeParams, `A`
             * and `R`
             */
            ? (...args: A) => R
            /**
             * essentially this is an unreachable branch. It doesn't really
             * matter what this type is
             */
            : T;

/**
 * <infer T> for further type inference
 * infer S extends string = a type that contains string
 */

console.log('all done.');
