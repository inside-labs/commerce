export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Datetime: any;
    UUID: any;
    Binary: any;
    Date: string;
    JSON: any;
}

export interface Query {
    __typename: 'Query';
    demo: Demo;
    favoriteGetFavorites: Array<Scalars['String']>;
    friendshipGetFriends: Array<Friendship>;
    keycardGetKeycard: UserGetKeycardResponse;
    partyMemberGetMembers: Array<PartyMember>;
    selfDeclarationGetDeclarations: Array<SelfDeclaration>;
    shopGetRootCategories: Array<ShopCategory>;
    shopGetCategoriesWithParentCategory: Array<ShopCategory>;
    shopGetProducts: ShopGetProductsResponse;
    shopGetProduct: ShopProduct;
    shopGetProductBySlug: ShopProduct;
    shopGetVariantsForProductOptions: Array<ShopProductVariant>;
    shopGetProductCalendarPricesAndStock: Array<ShopDatePriceAndStock>;
    shopGetCart: ShopCart;
    shopGetCustomerAccountCouponsValidForCart: Array<ShopCoupon>;
    shopGetUserCoupons: Array<ShopCoupon>;
    shopGetUserSavedCreditCards: Array<ShopCreditCard>;
    userGetDetails: User;
    authSignUp: SignUpConfirmation;
    authPasswordLogin: Credentials;
    authPasswordlessLogin: PasswordlessAuthChallenge;
    authAnswerPasswordlessChallenge: PasswordlessChallengeResult;
}

export interface QueryDemoArgs {
    id: Scalars['ID'];
}

export interface QueryShopGetCategoriesWithParentCategoryArgs {
    parentCategoryId: Scalars['String'];
}

export interface QueryShopGetProductsArgs {
    input: ShopGetProductsInput;
}

export interface QueryShopGetProductArgs {
    productId: Scalars['String'];
}

export interface QueryShopGetProductBySlugArgs {
    slug: Scalars['String'];
}

export interface QueryShopGetVariantsForProductOptionsArgs {
    items: Array<ShopProductOptionsInput>;
}

export interface QueryShopGetProductCalendarPricesAndStockArgs {
    input: Maybe<ShopLoadCalendarPricesAndStockInput>;
}

export interface QueryShopGetCartArgs {
    cartId: Scalars['String'];
}

export interface QueryShopGetCustomerAccountCouponsValidForCartArgs {
    cartId: Scalars['String'];
}

export interface QueryAuthSignUpArgs {
    username: Scalars['String'];
    password: Maybe<Scalars['String']>;
}

export interface QueryAuthPasswordLoginArgs {
    username: Scalars['String'];
    password: Scalars['String'];
}

export interface QueryAuthPasswordlessLoginArgs {
    username: Scalars['String'];
}

export interface QueryAuthAnswerPasswordlessChallengeArgs {
    username: Scalars['String'];
    session: Scalars['String'];
    answer: Scalars['String'];
}

export interface Demo {
    __typename: 'Demo';
    id: Scalars['ID'];
    some: Scalars['String'];
    another: Maybe<Scalars['String']>;
}

export interface Friendship {
    __typename: 'Friendship';
    id: Scalars['String'];
    userId: Scalars['String'];
    createdAt: Scalars['Datetime'];
    status: FriendshipStatus;
    requester: Scalars['Boolean'];
}

export type FriendshipStatus = 'PENDING' | 'ACCEPTED';

export interface UserGetKeycardResponse {
    __typename: 'UserGetKeycardResponse';
    keycard: Maybe<Keycard>;
}

export interface Keycard {
    __typename: 'Keycard';
    id: Scalars['String'];
    keycardNumber: Scalars['String'];
    keycardType: KeycardType;
    zipcode: Maybe<Scalars['String']>;
}

export type KeycardType = 'AXESS' | 'SKIDATA' | 'SWISS_PASS' | 'UNKNOWN';

export interface PartyMember {
    __typename: 'PartyMember';
    id: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    dateOfBirth: Maybe<Scalars['String']>;
    keycard: Maybe<Keycard>;
}

export interface SelfDeclaration {
    __typename: 'SelfDeclaration';
    declarationId: Scalars['String'];
}

export interface ShopCategory {
    __typename: 'ShopCategory';
    id: Scalars['String'];
    name: Scalars['String'];
    description: Maybe<Scalars['String']>;
    images: Array<ShopImage>;
    slug: Scalars['String'];
    sort: Maybe<Scalars['Int']>;
    parentId: Maybe<Scalars['String']>;
    rootId: Maybe<Scalars['String']>;
}

export interface ShopImage {
    __typename: 'ShopImage';
    id: Scalars['String'];
    url: Scalars['String'];
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
}

export interface ShopGetProductsInput {
    searchTerm: Maybe<Scalars['String']>;
    categoryId: Maybe<Scalars['String']>;
    page: Scalars['Int'];
    limit: Scalars['Int'];
}

export interface ShopGetProductsResponse {
    __typename: 'ShopGetProductsResponse';
    products: Array<ShopProductSummary>;
    count: Scalars['Int'];
    page: Scalars['Int'];
}

export interface ShopProductSummary extends ShopProductBase {
    __typename: 'ShopProductSummary';
    id: Scalars['String'];
    type: ShopProductType;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Maybe<Scalars['String']>;
    category: Maybe<Scalars['String']>;
    images: Array<ShopImage>;
    options: Array<ShopProductOption>;
    variantOptions: Array<ShopProductVariantOption>;
    tags: Array<Scalars['String']>;
    attributes: Array<ShopProductAttribute>;
    price: Maybe<Scalars['Float']>;
    salePrice: Maybe<Scalars['Float']>;
    stock: Maybe<Scalars['Int']>;
    onSale: Maybe<Scalars['Boolean']>;
    hidden: Maybe<Scalars['Boolean']>;
}

export interface ShopProductBase {
    id: Scalars['String'];
    type: ShopProductType;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Maybe<Scalars['String']>;
    category: Maybe<Scalars['String']>;
    images: Array<ShopImage>;
    options: Array<ShopProductOption>;
    variantOptions: Array<ShopProductVariantOption>;
    tags: Array<Scalars['String']>;
    attributes: Array<ShopProductAttribute>;
    price: Maybe<Scalars['Float']>;
    salePrice: Maybe<Scalars['Float']>;
    stock: Maybe<Scalars['Int']>;
    onSale: Maybe<Scalars['Boolean']>;
    hidden: Maybe<Scalars['Boolean']>;
}

export type ShopProductType = 'standard' | 'bundle' | 'giftcard' | 'variable' | 'subscription' | 'virtual';

export interface ShopProductOption {
    __typename: 'ShopProductOption';
    id: Scalars['String'];
    name: Scalars['String'];
    description: Maybe<Scalars['String']>;
    values: Maybe<Array<ShopProductOptionValue>>;
    required: Maybe<Scalars['Boolean']>;
    placeholder: Maybe<Scalars['String']>;
    inputType: Maybe<ShopProductOptionInputType>;
    price: Maybe<Scalars['Float']>;
    parentId: Maybe<Scalars['String']>;
    parentValueIds: Maybe<Array<Scalars['String']>>;
}

export interface ShopProductOptionValue {
    __typename: 'ShopProductOptionValue';
    id: Scalars['String'];
    name: Scalars['String'];
    description: Maybe<Scalars['String']>;
    price: Maybe<Scalars['Float']>;
}

export type ShopProductOptionInputType = 'select' | 'toggle' | 'short_text' | 'long_text';

export interface ShopProductVariantOption {
    __typename: 'ShopProductVariantOption';
    id: Scalars['String'];
    name: Scalars['String'];
    values: Maybe<Array<ShopProductVariantOptionValue>>;
}

export interface ShopProductVariantOptionValue {
    __typename: 'ShopProductVariantOptionValue';
    id: Scalars['String'];
    name: Scalars['String'];
}

export type ShopProductAttribute =
    | ShopProductAttributeStringValue
    | ShopProductAttributeBooleanValue
    | ShopProductAttributeIntValue
    | ShopProductAttributeFloatValue
    | ShopProductAttributeImageValue
    | ShopProductAttributeFileValue
    | ShopProductAttributeStringArrayValue
    | ShopProductAttributeImageArrayValue
    | ShopProductAttributeFileArrayValue;

export interface ShopProductAttributeStringValue extends ShopProductAttributeBase {
    __typename: 'ShopProductAttributeStringValue';
    name: Scalars['String'];
    value: Scalars['String'];
}

export interface ShopProductAttributeBase {
    name: Scalars['String'];
}

export interface ShopProductAttributeBooleanValue extends ShopProductAttributeBase {
    __typename: 'ShopProductAttributeBooleanValue';
    name: Scalars['String'];
    value: Scalars['Boolean'];
}

export interface ShopProductAttributeIntValue extends ShopProductAttributeBase {
    __typename: 'ShopProductAttributeIntValue';
    name: Scalars['String'];
    value: Scalars['Int'];
}

export interface ShopProductAttributeFloatValue extends ShopProductAttributeBase {
    __typename: 'ShopProductAttributeFloatValue';
    name: Scalars['String'];
    value: Scalars['Float'];
}

export interface ShopProductAttributeImageValue extends ShopProductAttributeBase {
    __typename: 'ShopProductAttributeImageValue';
    name: Scalars['String'];
    value: ShopImage;
}

export interface ShopProductAttributeFileValue extends ShopProductAttributeBase {
    __typename: 'ShopProductAttributeFileValue';
    name: Scalars['String'];
    value: ShopFile;
}

export interface ShopFile {
    __typename: 'ShopFile';
    id: Scalars['String'];
    filename: Scalars['String'];
    contentType: Scalars['String'];
    url: Scalars['String'];
}

export interface ShopProductAttributeStringArrayValue extends ShopProductAttributeBase {
    __typename: 'ShopProductAttributeStringArrayValue';
    name: Scalars['String'];
    value: Array<Scalars['String']>;
}

export interface ShopProductAttributeImageArrayValue extends ShopProductAttributeBase {
    __typename: 'ShopProductAttributeImageArrayValue';
    name: Scalars['String'];
    value: Array<ShopImage>;
}

export interface ShopProductAttributeFileArrayValue extends ShopProductAttributeBase {
    __typename: 'ShopProductAttributeFileArrayValue';
    name: Scalars['String'];
    value: Array<ShopFile>;
}

export interface ShopProduct extends ShopProductBase {
    __typename: 'ShopProduct';
    id: Scalars['String'];
    type: ShopProductType;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Maybe<Scalars['String']>;
    category: Maybe<Scalars['String']>;
    images: Array<ShopImage>;
    options: Array<ShopProductOption>;
    variantOptions: Array<ShopProductVariantOption>;
    upsells: Array<ShopProductUpsell>;
    crossSells: Array<ShopProductCrossSell>;
    bundleItems: Maybe<Array<ShopProductBundleItem>>;
    tags: Array<Scalars['String']>;
    attributes: Array<ShopProductAttribute>;
    price: Maybe<Scalars['Float']>;
    salePrice: Maybe<Scalars['Float']>;
    stock: Maybe<Scalars['Int']>;
    onSale: Maybe<Scalars['Boolean']>;
    hidden: Maybe<Scalars['Boolean']>;
}

export interface ShopProductUpsell {
    __typename: 'ShopProductUpsell';
    product: ShopProductUpsellProduct;
}

export interface ShopProductUpsellProduct extends ShopProductBase {
    __typename: 'ShopProductUpsellProduct';
    id: Scalars['String'];
    type: ShopProductType;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Maybe<Scalars['String']>;
    category: Maybe<Scalars['String']>;
    images: Array<ShopImage>;
    options: Array<ShopProductOption>;
    variantOptions: Array<ShopProductVariantOption>;
    crossSells: Array<ShopProductCrossSell>;
    tags: Array<Scalars['String']>;
    attributes: Array<ShopProductAttribute>;
    price: Maybe<Scalars['Float']>;
    salePrice: Maybe<Scalars['Float']>;
    stock: Maybe<Scalars['Int']>;
    onSale: Maybe<Scalars['Boolean']>;
    hidden: Maybe<Scalars['Boolean']>;
}

export interface ShopProductCrossSell {
    __typename: 'ShopProductCrossSell';
    product: Maybe<ShopProductCrossSellProduct>;
    discount_type: ShopProductDiscountType;
    discount_amount: Maybe<Scalars['Float']>;
    discount_percent: Maybe<Scalars['Float']>;
}

export interface ShopProductCrossSellProduct extends ShopProductBase {
    __typename: 'ShopProductCrossSellProduct';
    id: Scalars['String'];
    type: ShopProductType;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Maybe<Scalars['String']>;
    category: Maybe<Scalars['String']>;
    images: Array<ShopImage>;
    options: Array<ShopProductOption>;
    variantOptions: Array<ShopProductVariantOption>;
    tags: Array<Scalars['String']>;
    attributes: Array<ShopProductAttribute>;
    price: Maybe<Scalars['Float']>;
    salePrice: Maybe<Scalars['Float']>;
    stock: Maybe<Scalars['Int']>;
    onSale: Maybe<Scalars['Boolean']>;
    hidden: Maybe<Scalars['Boolean']>;
}

export type ShopProductDiscountType = 'fixed' | 'percent';

export interface ShopProductBundleItem {
    __typename: 'ShopProductBundleItem';
    id: Scalars['String'];
    quantity: Scalars['Int'];
    productId: Scalars['String'];
    variantId: Maybe<Scalars['String']>;
    product: ShopProductBundleItemProduct;
}

export interface ShopProductBundleItemProduct extends ShopProductBase {
    __typename: 'ShopProductBundleItemProduct';
    id: Scalars['String'];
    type: ShopProductType;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Maybe<Scalars['String']>;
    category: Maybe<Scalars['String']>;
    images: Array<ShopImage>;
    options: Array<ShopProductOption>;
    variantOptions: Array<ShopProductVariantOption>;
    tags: Array<Scalars['String']>;
    attributes: Array<ShopProductAttribute>;
    price: Maybe<Scalars['Float']>;
    salePrice: Maybe<Scalars['Float']>;
    stock: Maybe<Scalars['Int']>;
    onSale: Maybe<Scalars['Boolean']>;
    hidden: Maybe<Scalars['Boolean']>;
}

export interface ShopProductOptionsInput {
    productId: Scalars['String'];
    options: Array<ShopProductOptionInput>;
}

export interface ShopProductOptionInput {
    id: Scalars['String'];
    valueId: Scalars['String'];
    variant: Scalars['Boolean'];
}

export interface ShopProductVariant {
    __typename: 'ShopProductVariant';
    id: Scalars['String'];
    name: Scalars['String'];
    productId: Scalars['String'];
    variantId: Scalars['String'];
    price: Scalars['Float'];
    salePrice: Maybe<Scalars['Float']>;
    onSale: Maybe<Scalars['Boolean']>;
    stock: Maybe<Scalars['Int']>;
    options: Maybe<Array<ShopProductVariantOptionDefintion>>;
}

export interface ShopProductVariantOptionDefintion {
    __typename: 'ShopProductVariantOptionDefintion';
    id: Scalars['String'];
    valueId: Scalars['String'];
    variant: Maybe<Scalars['Boolean']>;
}

export interface ShopLoadCalendarPricesAndStockInput {
    productId: Scalars['String'];
    options: Maybe<Array<ShopLoadCalendarPricesAndStockOptionInput>>;
}

export interface ShopLoadCalendarPricesAndStockOptionInput {
    id: Scalars['String'];
    value: Scalars['String'];
}

export interface ShopDatePriceAndStock {
    __typename: 'ShopDatePriceAndStock';
    date: Scalars['String'];
    price: Scalars['Float'];
    stock: Maybe<Scalars['Int']>;
    active: Maybe<Scalars['Boolean']>;
}

export interface ShopCart {
    __typename: 'ShopCart';
    id: Scalars['String'];
    items: Array<ShopCartItem>;
    shipping: Maybe<ShopOfferShipping>;
    giftcards: Array<ShopCartGiftcardItem>;
    coupon: Maybe<ShopCartCoupon>;
    promotions: Maybe<Array<Maybe<ShopPromotion>>>;
    taxes: Array<Maybe<ShopOfferTax>>;
    paymentMethod: Maybe<ShopCartPaymentMethod>;
    subTotal: Maybe<Scalars['Float']>;
    grandTotal: Maybe<Scalars['Float']>;
}

export interface ShopCartItem {
    __typename: 'ShopCartItem';
    id: Scalars['String'];
    name: Scalars['String'];
    description: Maybe<Scalars['String']>;
    options: Maybe<Array<ShopCartItemOption>>;
    quantity: Scalars['Int'];
    productId: Scalars['String'];
    variantId: Maybe<Scalars['String']>;
    originalPrice: Scalars['Float'];
    price: Scalars['Float'];
    discount: Scalars['Float'];
    totalPrice: Scalars['Float'];
    totalDiscount: Scalars['Float'];
}

export interface ShopCartItemOption {
    __typename: 'ShopCartItemOption';
    id: Scalars['String'];
    name: Scalars['String'];
    value: Scalars['String'];
    price: Maybe<Scalars['Float']>;
}

export interface ShopOfferShipping {
    name: Maybe<Scalars['String']>;
    first_name: Maybe<Scalars['String']>;
    last_name: Maybe<Scalars['String']>;
    address1: Maybe<Scalars['String']>;
    address2: Maybe<Scalars['String']>;
    city: Maybe<Scalars['String']>;
    state: Maybe<Scalars['String']>;
    zip: Maybe<Scalars['Int']>;
    country: Maybe<Scalars['String']>;
    phone: Maybe<Scalars['String']>;
    price: Maybe<Scalars['Float']>;
    service: Maybe<Scalars['String']>;
    service_name: Maybe<Scalars['String']>;
}

export interface ShopCartGiftcardItem {
    id: Scalars['String'];
    codeLast4: Scalars['String'];
    amount: Scalars['Float'];
    balance: Scalars['Float'];
}

export interface ShopCartCoupon {
    __typename: 'ShopCartCoupon';
    id: Scalars['String'];
    name: Scalars['String'];
    code: Scalars['String'];
    amount: Scalars['Float'];
}

export interface ShopPromotion {
    __typename: 'ShopPromotion';
    id: Scalars['String'];
    name: Scalars['String'];
    description: Maybe<Scalars['String']>;
    amount: Scalars['Float'];
}

export interface ShopOfferTax {
    id: Scalars['String'];
    name: Scalars['String'];
    rate: Scalars['Float'];
    amount: Scalars['Float'];
}

export interface ShopCartPaymentMethod {
    __typename: 'ShopCartPaymentMethod';
    token: Scalars['String'];
    last4: Maybe<Scalars['String']>;
    brand: Maybe<ShopCardBrand>;
    expMonth: Maybe<Scalars['Int']>;
    expYear: Maybe<Scalars['Int']>;
}

export type ShopCardBrand = 'AMERICAN_EXPRESS' | 'MASTER_CARD' | 'VISA' | 'UNKNOWN';

export interface ShopCoupon {
    __typename: 'ShopCoupon';
    id: Scalars['String'];
    code: Scalars['String'];
    name: Scalars['String'];
    description: Maybe<Scalars['String']>;
}

export interface ShopCreditCard {
    __typename: 'ShopCreditCard';
    id: Scalars['String'];
    expMonth: Scalars['Int'];
    expYear: Scalars['Int'];
    last4: Scalars['String'];
    brand: ShopCardBrand;
    expired: Scalars['Boolean'];
    default: Maybe<Scalars['Boolean']>;
}

export interface User {
    __typename: 'User';
    id: Scalars['ID'];
    email: Scalars['String'];
    firstName: Maybe<Scalars['String']>;
    lastName: Maybe<Scalars['String']>;
    phoneNumber: Maybe<Scalars['String']>;
    avatarUrl: Maybe<Scalars['String']>;
    displayName: Maybe<Scalars['String']>;
    languageCode: Maybe<Scalars['String']>;
}

export interface SignUpConfirmation {
    __typename: 'SignUpConfirmation';
    userId: Scalars['String'];
    confirmed: Scalars['Boolean'];
}

export interface Credentials {
    __typename: 'Credentials';
    accessToken: Scalars['String'];
    expiresIn: Scalars['Int'];
    tokenType: Scalars['String'];
    refreshToken: Scalars['String'];
    idToken: Scalars['String'];
}

export interface PasswordlessAuthChallenge {
    __typename: 'PasswordlessAuthChallenge';
    session: Scalars['String'];
}

export type PasswordlessChallengeResult = Credentials | PasswordlessAuthChallenge;

export interface Mutation {
    __typename: 'Mutation';
    demoCreate: Maybe<Demo>;
    favoriteAddFavorite: Array<Scalars['String']>;
    favoriteRemoveFavorite: Array<Scalars['String']>;
    friendshipSendFriendRequest: Array<Friendship>;
    friendshipCancelFriendRequest: Array<Friendship>;
    friendshipAcceptFriendRequest: Array<Friendship>;
    friendshipRejectFriendRequest: Array<Friendship>;
    friendshipRemoveFriend: Array<Friendship>;
    keycardSetKeycard: Keycard;
    keycardRemoveKeycard: Scalars['Boolean'];
    partyMemberAddMember: Array<PartyMember>;
    partyMemberUpdateMember: Array<PartyMember>;
    partyMemberRemoveMember: Array<PartyMember>;
    selfDeclarationAddDeclaration: Array<SelfDeclaration>;
    selfDeclarationRemoveDeclaration: Array<SelfDeclaration>;
    shopCreateCartWithItems: ShopCart;
    shopAddItemsToCart: ShopCart;
    shopUpdateCartItemQuantity: ShopCart;
    shopRemoveItemFromCart: ShopCart;
    shopClearAllCartItems: ShopCart;
    shopApplyCouponToCart: ShopCart;
    shopRemoveCouponFromCart: ShopCart;
    shopApplyGiftCardToCart: ShopCart;
    shopRemoveGiftcardFromCart: ShopCart;
    shopApplyAccountCreditToCart: ShopCart;
    shopRemoveAccountCreditFromCart: ShopCart;
    shopUseTokenizedCardForCartPayment: ShopCart;
    shopUseSavedPaymentMethodForCartPayment: ShopCart;
    shopApplyPromotionToCart: ShopCart;
    shopRemovePromotionFromCart: ShopCart;
    shopAddCreditCardToCustomerAccount: Array<ShopCreditCard>;
    shopSetCustomerAccountDefaultCreditCard: Array<ShopCreditCard>;
    shopRemoveCreditCardFromCustomerAccount: Array<ShopCreditCard>;
    shopCheckout: ShopCheckoutResponse;
    userCreate: User;
    userUpdateDetails: User;
    userUpdateAvatar: User;
    userUpdateLanguage: User;
    userSetProfilePublic: User;
    userSetProfilePrivate: User;
}

export interface MutationDemoCreateArgs {
    input: CreateDemoInput;
}

export interface MutationFavoriteAddFavoriteArgs {
    itemId: Scalars['String'];
}

export interface MutationFavoriteRemoveFavoriteArgs {
    itemId: Scalars['String'];
}

export interface MutationFriendshipSendFriendRequestArgs {
    userId: Scalars['String'];
}

export interface MutationFriendshipCancelFriendRequestArgs {
    requestId: Scalars['String'];
}

export interface MutationFriendshipAcceptFriendRequestArgs {
    requestId: Scalars['String'];
}

export interface MutationFriendshipRejectFriendRequestArgs {
    requestId: Scalars['String'];
}

export interface MutationFriendshipRemoveFriendArgs {
    requestId: Scalars['String'];
}

export interface MutationKeycardSetKeycardArgs {
    input: KeycardInput;
}

export interface MutationPartyMemberAddMemberArgs {
    input: PartyMemberInput;
}

export interface MutationPartyMemberUpdateMemberArgs {
    partyMemberId: Scalars['String'];
    input: PartyMemberInput;
}

export interface MutationPartyMemberRemoveMemberArgs {
    partyMemberId: Scalars['String'];
}

export interface MutationSelfDeclarationAddDeclarationArgs {
    declarationId: Scalars['String'];
}

export interface MutationSelfDeclarationRemoveDeclarationArgs {
    declarationId: Scalars['String'];
}

export interface MutationShopCreateCartWithItemsArgs {
    items: Array<ShopCartItemInput>;
}

export interface MutationShopAddItemsToCartArgs {
    cartId: Scalars['String'];
    items: Array<ShopCartItemInput>;
}

export interface MutationShopUpdateCartItemQuantityArgs {
    cartId: Scalars['String'];
    itemId: Scalars['String'];
    quantity: Scalars['Int'];
}

export interface MutationShopRemoveItemFromCartArgs {
    cartId: Scalars['String'];
    itemId: Scalars['String'];
}

export interface MutationShopClearAllCartItemsArgs {
    cartId: Scalars['String'];
}

export interface MutationShopApplyCouponToCartArgs {
    cartId: Scalars['String'];
    couponCode: Scalars['String'];
}

export interface MutationShopRemoveCouponFromCartArgs {
    cartId: Scalars['String'];
}

export interface MutationShopApplyGiftCardToCartArgs {
    cartId: Scalars['String'];
    giftcardCode: Scalars['String'];
    amount: Maybe<Scalars['Float']>;
}

export interface MutationShopRemoveGiftcardFromCartArgs {
    cartId: Scalars['String'];
    giftcardId: Scalars['String'];
}

export interface MutationShopApplyAccountCreditToCartArgs {
    cartId: Scalars['String'];
    amount: Scalars['Float'];
}

export interface MutationShopRemoveAccountCreditFromCartArgs {
    cartId: Scalars['String'];
}

export interface MutationShopUseTokenizedCardForCartPaymentArgs {
    cartId: Scalars['String'];
    creditCardToken: Scalars['String'];
}

export interface MutationShopUseSavedPaymentMethodForCartPaymentArgs {
    cartId: Scalars['String'];
    accountCardId: Scalars['String'];
}

export interface MutationShopApplyPromotionToCartArgs {
    cartId: Scalars['String'];
    promotionId: Scalars['String'];
}

export interface MutationShopRemovePromotionFromCartArgs {
    cartId: Scalars['String'];
    promotionId: Scalars['String'];
}

export interface MutationShopAddCreditCardToCustomerAccountArgs {
    input: ShopAddCreditCardToCustomerAccountInput;
}

export interface MutationShopSetCustomerAccountDefaultCreditCardArgs {
    cardId: Scalars['String'];
}

export interface MutationShopRemoveCreditCardFromCustomerAccountArgs {
    cardId: Scalars['String'];
}

export interface MutationShopCheckoutArgs {
    cartId: Scalars['String'];
}

export interface MutationUserCreateArgs {
    input: UserCreateInput;
}

export interface MutationUserUpdateDetailsArgs {
    input: UserSetDetailsInput;
}

export interface MutationUserUpdateAvatarArgs {
    data: Scalars['String'];
}

export interface MutationUserUpdateLanguageArgs {
    languageCode: Scalars['String'];
}

export interface CreateDemoInput {
    some: Scalars['String'];
    another: Maybe<Scalars['String']>;
}

export interface KeycardInput {
    keycardNumber: Scalars['String'];
    keycardType: KeycardType;
    zipcode: Maybe<Scalars['String']>;
}

export interface PartyMemberInput {
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    dateOfBirth: Maybe<Scalars['String']>;
    keycard: Maybe<KeycardInput>;
}

export interface ShopCartItemInput {
    productId: Scalars['String'];
    variantId: Maybe<Scalars['String']>;
    options: Maybe<Array<ShopCartItemOptionInput>>;
    quantity: Scalars['Int'];
    crossSellItems: Maybe<Array<ShopCartItemCrossSellInput>>;
}

export interface ShopCartItemOptionInput {
    id: Scalars['String'];
    valueId: Scalars['String'];
}

export interface ShopCartItemCrossSellInput {
    productId: Scalars['String'];
    variantId: Maybe<Scalars['String']>;
    options: Maybe<Array<ShopCartItemOptionInput>>;
    quantity: Scalars['Int'];
}

export interface ShopAddCreditCardToCustomerAccountInput {
    token: Scalars['String'];
    expMonth: Scalars['Int'];
    expYear: Scalars['Int'];
    last4: Scalars['String'];
    brand: ShopCardBrand;
}

export interface ShopCheckoutResponse {
    __typename: 'ShopCheckoutResponse';
    orderNumber: Scalars['String'];
    message: Scalars['String'];
}

export interface UserCreateInput {
    email: Scalars['String'];
}

export interface UserSetDetailsInput {
    firstName: Maybe<Scalars['String']>;
    lastName: Maybe<Scalars['String']>;
    phoneNumber: Maybe<Scalars['String']>;
    displayName: Maybe<Scalars['String']>;
}

export type AuthPasswordSignUpQueryVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
}>;

export type AuthPasswordSignUpQuery = {
    __typename: 'Query';
    authSignUp: { __typename: 'SignUpConfirmation'; userId: string; confirmed: boolean };
};

export type AuthPasswordLoginQueryVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
}>;

export type AuthPasswordLoginQuery = {
    __typename: 'Query';
    authPasswordLogin: {
        __typename: 'Credentials';
        idToken: string;
        refreshToken: string;
        expiresIn: number;
        tokenType: string;
        accessToken: string;
    };
};

export type ShopGetCartQueryVariables = Exact<{
    cartId: Scalars['String'];
}>;

export type ShopGetCartQuery = { __typename: 'Query'; shopGetCart: { __typename: 'ShopCart' } & ShopCartFragment };

export type ShopCreateCartWithItemsMutationVariables = Exact<{
    items: Array<ShopCartItemInput>;
}>;

export type ShopCreateCartWithItemsMutation = {
    __typename: 'Mutation';
    shopCreateCartWithItems: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopAddItemsToCartMutationVariables = Exact<{
    items: Array<ShopCartItemInput>;
    cartId: Scalars['String'];
}>;

export type ShopAddItemsToCartMutation = {
    __typename: 'Mutation';
    shopAddItemsToCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopUpdateCartItemQuantityMutationVariables = Exact<{
    cartId: Scalars['String'];
    itemId: Scalars['String'];
    quantity: Scalars['Int'];
}>;

export type ShopUpdateCartItemQuantityMutation = {
    __typename: 'Mutation';
    shopUpdateCartItemQuantity: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopRemoveItemFromCartMutationVariables = Exact<{
    itemId: Scalars['String'];
    cartId: Scalars['String'];
}>;

export type ShopRemoveItemFromCartMutation = {
    __typename: 'Mutation';
    shopRemoveItemFromCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopClearCartMutationVariables = Exact<{
    cartId: Scalars['String'];
}>;

export type ShopClearCartMutation = {
    __typename: 'Mutation';
    shopClearAllCartItems: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopApplyCouponToCartMutationVariables = Exact<{
    couponCode: Scalars['String'];
    cartId: Scalars['String'];
}>;

export type ShopApplyCouponToCartMutation = {
    __typename: 'Mutation';
    shopApplyCouponToCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopRemoveCouponFromCartMutationVariables = Exact<{
    cartId: Scalars['String'];
}>;

export type ShopRemoveCouponFromCartMutation = {
    __typename: 'Mutation';
    shopRemoveCouponFromCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopApplyGiftCardToCartMutationVariables = Exact<{
    cartId: Scalars['String'];
    giftcardCode: Scalars['String'];
    amount: Scalars['Float'];
}>;

export type ShopApplyGiftCardToCartMutation = {
    __typename: 'Mutation';
    shopApplyGiftCardToCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopRemoveGiftcardFromCartMutationVariables = Exact<{
    cartId: Scalars['String'];
    giftcardId: Scalars['String'];
}>;

export type ShopRemoveGiftcardFromCartMutation = {
    __typename: 'Mutation';
    shopRemoveGiftcardFromCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopApplyAccountCreditToCartMutationVariables = Exact<{
    cartId: Scalars['String'];
    amount: Scalars['Float'];
}>;

export type ShopApplyAccountCreditToCartMutation = {
    __typename: 'Mutation';
    shopApplyAccountCreditToCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopRemoveAccountCreditFromCartMutationVariables = Exact<{
    cartId: Scalars['String'];
}>;

export type ShopRemoveAccountCreditFromCartMutation = {
    __typename: 'Mutation';
    shopRemoveAccountCreditFromCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopApplyPromotionToCartMutationVariables = Exact<{
    cartId: Scalars['String'];
    promotionId: Scalars['String'];
}>;

export type ShopApplyPromotionToCartMutation = {
    __typename: 'Mutation';
    shopApplyPromotionToCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopRemovePromotionFromCartMutationVariables = Exact<{
    cartId: Scalars['String'];
    promotionId: Scalars['String'];
}>;

export type ShopRemovePromotionFromCartMutation = {
    __typename: 'Mutation';
    shopRemovePromotionFromCart: { __typename: 'ShopCart' } & ShopCartFragment;
};

export type ShopCheckoutMutationVariables = Exact<{
    cartId: Scalars['String'];
}>;

export type ShopCheckoutMutation = {
    __typename: 'Mutation';
    shopCheckout: { __typename: 'ShopCheckoutResponse'; orderNumber: string; message: string };
};

export type ShopCartFragment = {
    __typename: 'ShopCart';
    id: string;
    subTotal: Maybe<number>;
    grandTotal: Maybe<number>;
    items: Array<{
        __typename: 'ShopCartItem';
        id: string;
        name: string;
        description: Maybe<string>;
        quantity: number;
        productId: string;
        variantId: Maybe<string>;
        originalPrice: number;
        price: number;
        discount: number;
        totalPrice: number;
        totalDiscount: number;
        options: Maybe<
            Array<{ __typename: 'ShopCartItemOption'; price: Maybe<number>; value: string; id: string; name: string }>
        >;
    }>;
    shipping: Maybe<>;
    giftcards: Array<>;
    coupon: Maybe<{ __typename: 'ShopCartCoupon'; id: string; name: string; code: string; amount: number }>;
    promotions: Maybe<
        Array<
            Maybe<{ __typename: 'ShopPromotion'; amount: number; description: Maybe<string>; name: string; id: string }>
        >
    >;
    taxes: Array<Maybe<>>;
    paymentMethod: Maybe<{
        __typename: 'ShopCartPaymentMethod';
        expYear: Maybe<number>;
        expMonth: Maybe<number>;
        brand: Maybe<ShopCardBrand>;
        last4: Maybe<string>;
        token: string;
    }>;
};

export type ShopGetRootCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type ShopGetRootCategoriesQuery = {
    __typename: 'Query';
    shopGetRootCategories: Array<{
        __typename: 'ShopCategory';
        id: string;
        name: string;
        description: Maybe<string>;
        slug: string;
        sort: Maybe<number>;
        parentId: Maybe<string>;
        rootId: Maybe<string>;
        images: Array<{
            __typename: 'ShopImage';
            id: string;
            url: string;
            width: Maybe<number>;
            height: Maybe<number>;
        }>;
    }>;
};

export type ShopGetCategoriesWithParentyCategoryQueryVariables = Exact<{
    parentCategoryId: Scalars['String'];
}>;

export type ShopGetCategoriesWithParentyCategoryQuery = {
    __typename: 'Query';
    shopGetCategoriesWithParentCategory: Array<{
        __typename: 'ShopCategory';
        id: string;
        name: string;
        description: Maybe<string>;
        slug: string;
        sort: Maybe<number>;
        parentId: Maybe<string>;
        rootId: Maybe<string>;
        images: Array<{
            __typename: 'ShopImage';
            id: string;
            url: string;
            width: Maybe<number>;
            height: Maybe<number>;
        }>;
    }>;
};

export type ShopGetProductListQueryVariables = Exact<{
    input: ShopGetProductsInput;
}>;

export type ShopGetProductListQuery = {
    __typename: 'Query';
    shopGetProducts: {
        __typename: 'ShopGetProductsResponse';
        page: number;
        count: number;
        products: Array<{ __typename: 'ShopProductSummary' } & ShopProductForListViewFragment>;
    };
};

export type ShopGetProductBySlugQueryVariables = Exact<{
    slug: Scalars['String'];
}>;

export type ShopGetProductBySlugQuery = {
    __typename: 'Query';
    product: { __typename: 'ShopProduct' } & ShopProductFragment;
};

export type ShopProductForListViewFragment = {
    __typename: 'ShopProductSummary';
    id: string;
    name: string;
    slug: string;
    price: Maybe<number>;
    type: ShopProductType;
    description: Maybe<string>;
    category: Maybe<string>;
    salePrice: Maybe<number>;
    onSale: Maybe<boolean>;
    tags: Array<string>;
    images: Array<{ __typename: 'ShopImage'; height: Maybe<number>; width: Maybe<number>; url: string; id: string }>;
};

export type ShopProductFragment = {
    __typename: 'ShopProduct';
    id: string;
    type: ShopProductType;
    name: string;
    slug: string;
    category: Maybe<string>;
    description: Maybe<string>;
    tags: Array<string>;
    price: Maybe<number>;
    salePrice: Maybe<number>;
    stock: Maybe<number>;
    onSale: Maybe<boolean>;
    hidden: Maybe<boolean>;
    images: Array<{ __typename: 'ShopImage'; height: Maybe<number>; width: Maybe<number>; url: string; id: string }>;
    options: Array<{
        __typename: 'ShopProductOption';
        price: Maybe<number>;
        inputType: Maybe<ShopProductOptionInputType>;
        placeholder: Maybe<string>;
        required: Maybe<boolean>;
        description: Maybe<string>;
        name: string;
        id: string;
        parentId: Maybe<string>;
        parentValueIds: Maybe<Array<string>>;
        values: Maybe<
            Array<{
                __typename: 'ShopProductOptionValue';
                description: Maybe<string>;
                name: string;
                id: string;
                price: Maybe<number>;
            }>
        >;
    }>;
    variantOptions: Array<{
        __typename: 'ShopProductVariantOption';
        id: string;
        name: string;
        values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
    }>;
    attributes: Array<
        | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
        | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
        | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
        | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
        | {
              __typename: 'ShopProductAttributeImageValue';
              name: string;
              imageValue: {
                  __typename: 'ShopImage';
                  id: string;
                  url: string;
                  width: Maybe<number>;
                  height: Maybe<number>;
              };
          }
        | {
              __typename: 'ShopProductAttributeFileValue';
              name: string;
              fileValue: { __typename: 'ShopFile'; id: string; filename: string; contentType: string; url: string };
          }
        | { __typename: 'ShopProductAttributeStringArrayValue'; name: string; stringArrayValue: Array<string> }
        | {
              __typename: 'ShopProductAttributeImageArrayValue';
              name: string;
              imageArrayValue: Array<{
                  __typename: 'ShopImage';
                  height: Maybe<number>;
                  width: Maybe<number>;
                  url: string;
                  id: string;
              }>;
          }
        | {
              __typename: 'ShopProductAttributeFileArrayValue';
              name: string;
              fileArrayValue: Array<{
                  __typename: 'ShopFile';
                  url: string;
                  contentType: string;
                  filename: string;
                  id: string;
              }>;
          }
    >;
    upsells: Array<{
        __typename: 'ShopProductUpsell';
        product: {
            __typename: 'ShopProductUpsellProduct';
            id: string;
            type: ShopProductType;
            name: string;
            slug: string;
            category: Maybe<string>;
            description: Maybe<string>;
            tags: Array<string>;
            price: Maybe<number>;
            salePrice: Maybe<number>;
            stock: Maybe<number>;
            onSale: Maybe<boolean>;
            hidden: Maybe<boolean>;
            images: Array<{
                __typename: 'ShopImage';
                height: Maybe<number>;
                width: Maybe<number>;
                url: string;
                id: string;
            }>;
            options: Array<{
                __typename: 'ShopProductOption';
                price: Maybe<number>;
                inputType: Maybe<ShopProductOptionInputType>;
                placeholder: Maybe<string>;
                required: Maybe<boolean>;
                description: Maybe<string>;
                name: string;
                id: string;
                parentId: Maybe<string>;
                parentValueIds: Maybe<Array<string>>;
                values: Maybe<
                    Array<{
                        __typename: 'ShopProductOptionValue';
                        description: Maybe<string>;
                        name: string;
                        id: string;
                        price: Maybe<number>;
                    }>
                >;
            }>;
            variantOptions: Array<{
                __typename: 'ShopProductVariantOption';
                id: string;
                name: string;
                values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
            }>;
            attributes: Array<
                | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
                | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
                | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
                | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
                | {
                      __typename: 'ShopProductAttributeImageValue';
                      name: string;
                      imageValue: {
                          __typename: 'ShopImage';
                          id: string;
                          url: string;
                          width: Maybe<number>;
                          height: Maybe<number>;
                      };
                  }
                | {
                      __typename: 'ShopProductAttributeFileValue';
                      name: string;
                      fileValue: {
                          __typename: 'ShopFile';
                          id: string;
                          filename: string;
                          contentType: string;
                          url: string;
                      };
                  }
                | { __typename: 'ShopProductAttributeStringArrayValue'; name: string; stringArrayValue: Array<string> }
                | {
                      __typename: 'ShopProductAttributeImageArrayValue';
                      name: string;
                      imageArrayValue: Array<{
                          __typename: 'ShopImage';
                          height: Maybe<number>;
                          width: Maybe<number>;
                          url: string;
                          id: string;
                      }>;
                  }
                | {
                      __typename: 'ShopProductAttributeFileArrayValue';
                      name: string;
                      fileArrayValue: Array<{
                          __typename: 'ShopFile';
                          url: string;
                          contentType: string;
                          filename: string;
                          id: string;
                      }>;
                  }
            >;
            crossSells: Array<{
                __typename: 'ShopProductCrossSell';
                discount_type: ShopProductDiscountType;
                discount_amount: Maybe<number>;
                discount_percent: Maybe<number>;
                product: Maybe<{
                    __typename: 'ShopProductCrossSellProduct';
                    id: string;
                    type: ShopProductType;
                    name: string;
                    slug: string;
                    category: Maybe<string>;
                    description: Maybe<string>;
                    tags: Array<string>;
                    price: Maybe<number>;
                    salePrice: Maybe<number>;
                    stock: Maybe<number>;
                    onSale: Maybe<boolean>;
                    hidden: Maybe<boolean>;
                    images: Array<{
                        __typename: 'ShopImage';
                        height: Maybe<number>;
                        width: Maybe<number>;
                        url: string;
                        id: string;
                    }>;
                    options: Array<{
                        __typename: 'ShopProductOption';
                        price: Maybe<number>;
                        inputType: Maybe<ShopProductOptionInputType>;
                        placeholder: Maybe<string>;
                        required: Maybe<boolean>;
                        description: Maybe<string>;
                        name: string;
                        id: string;
                        parentId: Maybe<string>;
                        parentValueIds: Maybe<Array<string>>;
                        values: Maybe<
                            Array<{
                                __typename: 'ShopProductOptionValue';
                                description: Maybe<string>;
                                name: string;
                                id: string;
                                price: Maybe<number>;
                            }>
                        >;
                    }>;
                    variantOptions: Array<{
                        __typename: 'ShopProductVariantOption';
                        id: string;
                        name: string;
                        values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
                    }>;
                    attributes: Array<
                        | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
                        | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
                        | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
                        | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
                        | {
                              __typename: 'ShopProductAttributeImageValue';
                              name: string;
                              imageValue: {
                                  __typename: 'ShopImage';
                                  id: string;
                                  url: string;
                                  width: Maybe<number>;
                                  height: Maybe<number>;
                              };
                          }
                        | {
                              __typename: 'ShopProductAttributeFileValue';
                              name: string;
                              fileValue: {
                                  __typename: 'ShopFile';
                                  id: string;
                                  filename: string;
                                  contentType: string;
                                  url: string;
                              };
                          }
                        | {
                              __typename: 'ShopProductAttributeStringArrayValue';
                              name: string;
                              stringArrayValue: Array<string>;
                          }
                        | {
                              __typename: 'ShopProductAttributeImageArrayValue';
                              name: string;
                              imageArrayValue: Array<{
                                  __typename: 'ShopImage';
                                  height: Maybe<number>;
                                  width: Maybe<number>;
                                  url: string;
                                  id: string;
                              }>;
                          }
                        | {
                              __typename: 'ShopProductAttributeFileArrayValue';
                              name: string;
                              fileArrayValue: Array<{
                                  __typename: 'ShopFile';
                                  url: string;
                                  contentType: string;
                                  filename: string;
                                  id: string;
                              }>;
                          }
                    >;
                }>;
            }>;
        };
    }>;
    crossSells: Array<{
        __typename: 'ShopProductCrossSell';
        discount_type: ShopProductDiscountType;
        discount_amount: Maybe<number>;
        discount_percent: Maybe<number>;
        product: Maybe<{
            __typename: 'ShopProductCrossSellProduct';
            id: string;
            type: ShopProductType;
            name: string;
            slug: string;
            category: Maybe<string>;
            description: Maybe<string>;
            tags: Array<string>;
            price: Maybe<number>;
            salePrice: Maybe<number>;
            stock: Maybe<number>;
            onSale: Maybe<boolean>;
            hidden: Maybe<boolean>;
            images: Array<{
                __typename: 'ShopImage';
                height: Maybe<number>;
                width: Maybe<number>;
                url: string;
                id: string;
            }>;
            options: Array<{
                __typename: 'ShopProductOption';
                price: Maybe<number>;
                inputType: Maybe<ShopProductOptionInputType>;
                placeholder: Maybe<string>;
                required: Maybe<boolean>;
                description: Maybe<string>;
                name: string;
                id: string;
                parentId: Maybe<string>;
                parentValueIds: Maybe<Array<string>>;
                values: Maybe<
                    Array<{
                        __typename: 'ShopProductOptionValue';
                        description: Maybe<string>;
                        name: string;
                        id: string;
                        price: Maybe<number>;
                    }>
                >;
            }>;
            variantOptions: Array<{
                __typename: 'ShopProductVariantOption';
                id: string;
                name: string;
                values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
            }>;
            attributes: Array<
                | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
                | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
                | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
                | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
                | {
                      __typename: 'ShopProductAttributeImageValue';
                      name: string;
                      imageValue: {
                          __typename: 'ShopImage';
                          id: string;
                          url: string;
                          width: Maybe<number>;
                          height: Maybe<number>;
                      };
                  }
                | {
                      __typename: 'ShopProductAttributeFileValue';
                      name: string;
                      fileValue: {
                          __typename: 'ShopFile';
                          id: string;
                          filename: string;
                          contentType: string;
                          url: string;
                      };
                  }
                | { __typename: 'ShopProductAttributeStringArrayValue'; name: string; stringArrayValue: Array<string> }
                | {
                      __typename: 'ShopProductAttributeImageArrayValue';
                      name: string;
                      imageArrayValue: Array<{
                          __typename: 'ShopImage';
                          height: Maybe<number>;
                          width: Maybe<number>;
                          url: string;
                          id: string;
                      }>;
                  }
                | {
                      __typename: 'ShopProductAttributeFileArrayValue';
                      name: string;
                      fileArrayValue: Array<{
                          __typename: 'ShopFile';
                          url: string;
                          contentType: string;
                          filename: string;
                          id: string;
                      }>;
                  }
            >;
        }>;
    }>;
    bundleItems: Maybe<
        Array<{
            __typename: 'ShopProductBundleItem';
            id: string;
            productId: string;
            variantId: Maybe<string>;
            quantity: number;
            product: {
                __typename: 'ShopProductBundleItemProduct';
                id: string;
                type: ShopProductType;
                name: string;
                slug: string;
                category: Maybe<string>;
                description: Maybe<string>;
                tags: Array<string>;
                price: Maybe<number>;
                salePrice: Maybe<number>;
                stock: Maybe<number>;
                onSale: Maybe<boolean>;
                hidden: Maybe<boolean>;
                images: Array<{
                    __typename: 'ShopImage';
                    height: Maybe<number>;
                    width: Maybe<number>;
                    url: string;
                    id: string;
                }>;
                options: Array<{
                    __typename: 'ShopProductOption';
                    price: Maybe<number>;
                    inputType: Maybe<ShopProductOptionInputType>;
                    placeholder: Maybe<string>;
                    required: Maybe<boolean>;
                    description: Maybe<string>;
                    name: string;
                    id: string;
                    parentId: Maybe<string>;
                    parentValueIds: Maybe<Array<string>>;
                    values: Maybe<
                        Array<{
                            __typename: 'ShopProductOptionValue';
                            description: Maybe<string>;
                            name: string;
                            id: string;
                            price: Maybe<number>;
                        }>
                    >;
                }>;
                variantOptions: Array<{
                    __typename: 'ShopProductVariantOption';
                    id: string;
                    name: string;
                    values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
                }>;
                attributes: Array<
                    | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
                    | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
                    | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
                    | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
                    | {
                          __typename: 'ShopProductAttributeImageValue';
                          name: string;
                          imageValue: {
                              __typename: 'ShopImage';
                              id: string;
                              url: string;
                              width: Maybe<number>;
                              height: Maybe<number>;
                          };
                      }
                    | {
                          __typename: 'ShopProductAttributeFileValue';
                          name: string;
                          fileValue: {
                              __typename: 'ShopFile';
                              id: string;
                              filename: string;
                              contentType: string;
                              url: string;
                          };
                      }
                    | {
                          __typename: 'ShopProductAttributeStringArrayValue';
                          name: string;
                          stringArrayValue: Array<string>;
                      }
                    | {
                          __typename: 'ShopProductAttributeImageArrayValue';
                          name: string;
                          imageArrayValue: Array<{
                              __typename: 'ShopImage';
                              height: Maybe<number>;
                              width: Maybe<number>;
                              url: string;
                              id: string;
                          }>;
                      }
                    | {
                          __typename: 'ShopProductAttributeFileArrayValue';
                          name: string;
                          fileArrayValue: Array<{
                              __typename: 'ShopFile';
                              url: string;
                              contentType: string;
                              filename: string;
                              id: string;
                          }>;
                      }
                >;
            };
        }>
    >;
};

type ShopProductBase_ShopProductSummary_Fragment = {
    __typename: 'ShopProductSummary';
    id: string;
    type: ShopProductType;
    name: string;
    slug: string;
    category: Maybe<string>;
    description: Maybe<string>;
    tags: Array<string>;
    price: Maybe<number>;
    salePrice: Maybe<number>;
    stock: Maybe<number>;
    onSale: Maybe<boolean>;
    hidden: Maybe<boolean>;
    images: Array<{ __typename: 'ShopImage'; height: Maybe<number>; width: Maybe<number>; url: string; id: string }>;
    options: Array<{
        __typename: 'ShopProductOption';
        price: Maybe<number>;
        inputType: Maybe<ShopProductOptionInputType>;
        placeholder: Maybe<string>;
        required: Maybe<boolean>;
        description: Maybe<string>;
        name: string;
        id: string;
        parentId: Maybe<string>;
        parentValueIds: Maybe<Array<string>>;
        values: Maybe<
            Array<{
                __typename: 'ShopProductOptionValue';
                description: Maybe<string>;
                name: string;
                id: string;
                price: Maybe<number>;
            }>
        >;
    }>;
    variantOptions: Array<{
        __typename: 'ShopProductVariantOption';
        id: string;
        name: string;
        values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
    }>;
    attributes: Array<
        | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
        | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
        | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
        | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
        | {
              __typename: 'ShopProductAttributeImageValue';
              name: string;
              imageValue: {
                  __typename: 'ShopImage';
                  id: string;
                  url: string;
                  width: Maybe<number>;
                  height: Maybe<number>;
              };
          }
        | {
              __typename: 'ShopProductAttributeFileValue';
              name: string;
              fileValue: { __typename: 'ShopFile'; id: string; filename: string; contentType: string; url: string };
          }
        | { __typename: 'ShopProductAttributeStringArrayValue'; name: string; stringArrayValue: Array<string> }
        | {
              __typename: 'ShopProductAttributeImageArrayValue';
              name: string;
              imageArrayValue: Array<{
                  __typename: 'ShopImage';
                  height: Maybe<number>;
                  width: Maybe<number>;
                  url: string;
                  id: string;
              }>;
          }
        | {
              __typename: 'ShopProductAttributeFileArrayValue';
              name: string;
              fileArrayValue: Array<{
                  __typename: 'ShopFile';
                  url: string;
                  contentType: string;
                  filename: string;
                  id: string;
              }>;
          }
    >;
};

type ShopProductBase_ShopProduct_Fragment = {
    __typename: 'ShopProduct';
    id: string;
    type: ShopProductType;
    name: string;
    slug: string;
    category: Maybe<string>;
    description: Maybe<string>;
    tags: Array<string>;
    price: Maybe<number>;
    salePrice: Maybe<number>;
    stock: Maybe<number>;
    onSale: Maybe<boolean>;
    hidden: Maybe<boolean>;
    images: Array<{ __typename: 'ShopImage'; height: Maybe<number>; width: Maybe<number>; url: string; id: string }>;
    options: Array<{
        __typename: 'ShopProductOption';
        price: Maybe<number>;
        inputType: Maybe<ShopProductOptionInputType>;
        placeholder: Maybe<string>;
        required: Maybe<boolean>;
        description: Maybe<string>;
        name: string;
        id: string;
        parentId: Maybe<string>;
        parentValueIds: Maybe<Array<string>>;
        values: Maybe<
            Array<{
                __typename: 'ShopProductOptionValue';
                description: Maybe<string>;
                name: string;
                id: string;
                price: Maybe<number>;
            }>
        >;
    }>;
    variantOptions: Array<{
        __typename: 'ShopProductVariantOption';
        id: string;
        name: string;
        values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
    }>;
    attributes: Array<
        | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
        | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
        | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
        | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
        | {
              __typename: 'ShopProductAttributeImageValue';
              name: string;
              imageValue: {
                  __typename: 'ShopImage';
                  id: string;
                  url: string;
                  width: Maybe<number>;
                  height: Maybe<number>;
              };
          }
        | {
              __typename: 'ShopProductAttributeFileValue';
              name: string;
              fileValue: { __typename: 'ShopFile'; id: string; filename: string; contentType: string; url: string };
          }
        | { __typename: 'ShopProductAttributeStringArrayValue'; name: string; stringArrayValue: Array<string> }
        | {
              __typename: 'ShopProductAttributeImageArrayValue';
              name: string;
              imageArrayValue: Array<{
                  __typename: 'ShopImage';
                  height: Maybe<number>;
                  width: Maybe<number>;
                  url: string;
                  id: string;
              }>;
          }
        | {
              __typename: 'ShopProductAttributeFileArrayValue';
              name: string;
              fileArrayValue: Array<{
                  __typename: 'ShopFile';
                  url: string;
                  contentType: string;
                  filename: string;
                  id: string;
              }>;
          }
    >;
};

type ShopProductBase_ShopProductUpsellProduct_Fragment = {
    __typename: 'ShopProductUpsellProduct';
    id: string;
    type: ShopProductType;
    name: string;
    slug: string;
    category: Maybe<string>;
    description: Maybe<string>;
    tags: Array<string>;
    price: Maybe<number>;
    salePrice: Maybe<number>;
    stock: Maybe<number>;
    onSale: Maybe<boolean>;
    hidden: Maybe<boolean>;
    images: Array<{ __typename: 'ShopImage'; height: Maybe<number>; width: Maybe<number>; url: string; id: string }>;
    options: Array<{
        __typename: 'ShopProductOption';
        price: Maybe<number>;
        inputType: Maybe<ShopProductOptionInputType>;
        placeholder: Maybe<string>;
        required: Maybe<boolean>;
        description: Maybe<string>;
        name: string;
        id: string;
        parentId: Maybe<string>;
        parentValueIds: Maybe<Array<string>>;
        values: Maybe<
            Array<{
                __typename: 'ShopProductOptionValue';
                description: Maybe<string>;
                name: string;
                id: string;
                price: Maybe<number>;
            }>
        >;
    }>;
    variantOptions: Array<{
        __typename: 'ShopProductVariantOption';
        id: string;
        name: string;
        values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
    }>;
    attributes: Array<
        | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
        | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
        | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
        | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
        | {
              __typename: 'ShopProductAttributeImageValue';
              name: string;
              imageValue: {
                  __typename: 'ShopImage';
                  id: string;
                  url: string;
                  width: Maybe<number>;
                  height: Maybe<number>;
              };
          }
        | {
              __typename: 'ShopProductAttributeFileValue';
              name: string;
              fileValue: { __typename: 'ShopFile'; id: string; filename: string; contentType: string; url: string };
          }
        | { __typename: 'ShopProductAttributeStringArrayValue'; name: string; stringArrayValue: Array<string> }
        | {
              __typename: 'ShopProductAttributeImageArrayValue';
              name: string;
              imageArrayValue: Array<{
                  __typename: 'ShopImage';
                  height: Maybe<number>;
                  width: Maybe<number>;
                  url: string;
                  id: string;
              }>;
          }
        | {
              __typename: 'ShopProductAttributeFileArrayValue';
              name: string;
              fileArrayValue: Array<{
                  __typename: 'ShopFile';
                  url: string;
                  contentType: string;
                  filename: string;
                  id: string;
              }>;
          }
    >;
};

type ShopProductBase_ShopProductCrossSellProduct_Fragment = {
    __typename: 'ShopProductCrossSellProduct';
    id: string;
    type: ShopProductType;
    name: string;
    slug: string;
    category: Maybe<string>;
    description: Maybe<string>;
    tags: Array<string>;
    price: Maybe<number>;
    salePrice: Maybe<number>;
    stock: Maybe<number>;
    onSale: Maybe<boolean>;
    hidden: Maybe<boolean>;
    images: Array<{ __typename: 'ShopImage'; height: Maybe<number>; width: Maybe<number>; url: string; id: string }>;
    options: Array<{
        __typename: 'ShopProductOption';
        price: Maybe<number>;
        inputType: Maybe<ShopProductOptionInputType>;
        placeholder: Maybe<string>;
        required: Maybe<boolean>;
        description: Maybe<string>;
        name: string;
        id: string;
        parentId: Maybe<string>;
        parentValueIds: Maybe<Array<string>>;
        values: Maybe<
            Array<{
                __typename: 'ShopProductOptionValue';
                description: Maybe<string>;
                name: string;
                id: string;
                price: Maybe<number>;
            }>
        >;
    }>;
    variantOptions: Array<{
        __typename: 'ShopProductVariantOption';
        id: string;
        name: string;
        values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
    }>;
    attributes: Array<
        | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
        | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
        | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
        | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
        | {
              __typename: 'ShopProductAttributeImageValue';
              name: string;
              imageValue: {
                  __typename: 'ShopImage';
                  id: string;
                  url: string;
                  width: Maybe<number>;
                  height: Maybe<number>;
              };
          }
        | {
              __typename: 'ShopProductAttributeFileValue';
              name: string;
              fileValue: { __typename: 'ShopFile'; id: string; filename: string; contentType: string; url: string };
          }
        | { __typename: 'ShopProductAttributeStringArrayValue'; name: string; stringArrayValue: Array<string> }
        | {
              __typename: 'ShopProductAttributeImageArrayValue';
              name: string;
              imageArrayValue: Array<{
                  __typename: 'ShopImage';
                  height: Maybe<number>;
                  width: Maybe<number>;
                  url: string;
                  id: string;
              }>;
          }
        | {
              __typename: 'ShopProductAttributeFileArrayValue';
              name: string;
              fileArrayValue: Array<{
                  __typename: 'ShopFile';
                  url: string;
                  contentType: string;
                  filename: string;
                  id: string;
              }>;
          }
    >;
};

type ShopProductBase_ShopProductBundleItemProduct_Fragment = {
    __typename: 'ShopProductBundleItemProduct';
    id: string;
    type: ShopProductType;
    name: string;
    slug: string;
    category: Maybe<string>;
    description: Maybe<string>;
    tags: Array<string>;
    price: Maybe<number>;
    salePrice: Maybe<number>;
    stock: Maybe<number>;
    onSale: Maybe<boolean>;
    hidden: Maybe<boolean>;
    images: Array<{ __typename: 'ShopImage'; height: Maybe<number>; width: Maybe<number>; url: string; id: string }>;
    options: Array<{
        __typename: 'ShopProductOption';
        price: Maybe<number>;
        inputType: Maybe<ShopProductOptionInputType>;
        placeholder: Maybe<string>;
        required: Maybe<boolean>;
        description: Maybe<string>;
        name: string;
        id: string;
        parentId: Maybe<string>;
        parentValueIds: Maybe<Array<string>>;
        values: Maybe<
            Array<{
                __typename: 'ShopProductOptionValue';
                description: Maybe<string>;
                name: string;
                id: string;
                price: Maybe<number>;
            }>
        >;
    }>;
    variantOptions: Array<{
        __typename: 'ShopProductVariantOption';
        id: string;
        name: string;
        values: Maybe<Array<{ __typename: 'ShopProductVariantOptionValue'; name: string; id: string }>>;
    }>;
    attributes: Array<
        | { __typename: 'ShopProductAttributeStringValue'; name: string; stringValue: string }
        | { __typename: 'ShopProductAttributeBooleanValue'; name: string; booleanValue: boolean }
        | { __typename: 'ShopProductAttributeIntValue'; name: string; intValue: number }
        | { __typename: 'ShopProductAttributeFloatValue'; name: string; floatValue: number }
        | {
              __typename: 'ShopProductAttributeImageValue';
              name: string;
              imageValue: {
                  __typename: 'ShopImage';
                  id: string;
                  url: string;
                  width: Maybe<number>;
                  height: Maybe<number>;
              };
          }
        | {
              __typename: 'ShopProductAttributeFileValue';
              name: string;
              fileValue: { __typename: 'ShopFile'; id: string; filename: string; contentType: string; url: string };
          }
        | { __typename: 'ShopProductAttributeStringArrayValue'; name: string; stringArrayValue: Array<string> }
        | {
              __typename: 'ShopProductAttributeImageArrayValue';
              name: string;
              imageArrayValue: Array<{
                  __typename: 'ShopImage';
                  height: Maybe<number>;
                  width: Maybe<number>;
                  url: string;
                  id: string;
              }>;
          }
        | {
              __typename: 'ShopProductAttributeFileArrayValue';
              name: string;
              fileArrayValue: Array<{
                  __typename: 'ShopFile';
                  url: string;
                  contentType: string;
                  filename: string;
                  id: string;
              }>;
          }
    >;
};

export type ShopProductBaseFragment =
    | ShopProductBase_ShopProductSummary_Fragment
    | ShopProductBase_ShopProduct_Fragment
    | ShopProductBase_ShopProductUpsellProduct_Fragment
    | ShopProductBase_ShopProductCrossSellProduct_Fragment
    | ShopProductBase_ShopProductBundleItemProduct_Fragment;

export type UserGetDetailsQueryVariables = Exact<{ [key: string]: never }>;

export type UserGetDetailsQuery = {
    __typename: 'Query';
    userGetDetails: {
        __typename: 'User';
        firstName: Maybe<string>;
        lastName: Maybe<string>;
        avatarUrl: Maybe<string>;
        displayName: Maybe<string>;
        languageCode: Maybe<string>;
        email: string;
        phoneNumber: Maybe<string>;
    };
};
