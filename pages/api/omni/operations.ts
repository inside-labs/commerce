import gql from 'graphql-tag';
export const ShopCart = gql`
    fragment ShopCart on ShopCart {
        id
        items {
            id
            name
            description
            options {
                price
                value
                id
                name
            }
            quantity
            productId
            variantId
            originalPrice
            price
            discount
            totalPrice
            totalDiscount
        }
        shipping {
            name
            first_name
            last_name
            address1
            address2
            city
            state
            zip
            country
            phone
            price
            service
            service_name
        }
        giftcards {
            id
            codeLast4
            amount
            balance
        }
        coupon {
            id
            name
            code
            amount
        }
        promotions {
            amount
            description
            name
            id
        }
        taxes {
            amount
            rate
            name
            id
        }
        paymentMethod {
            expYear
            expMonth
            brand
            last4
            token
        }
        subTotal
        grandTotal
    }
`;
export const ShopProductForListView = gql`
    fragment ShopProductForListView on ShopProductSummary {
        id
        name
        slug
        price
        type
        description
        category
        salePrice
        onSale
        tags
        images {
            height
            width
            url
            id
        }
    }
`;
export const ShopProduct = gql`
    fragment ShopProduct on ShopProduct {
        id
        type
        name
        slug
        category
        description
        images {
            height
            width
            url
            id
        }
        options {
            price
            inputType
            placeholder
            required
            values {
                description
                name
                id
                price
            }
            description
            name
            id
            parentId
            parentValueIds
        }
        variantOptions {
            values {
                name
                id
            }
            id
            name
        }
        tags
        attributes {
            ... on ShopProductAttributeStringValue {
                __typename
                name
                stringValue: value
            }
            ... on ShopProductAttributeBooleanValue {
                __typename
                name
                booleanValue: value
            }
            ... on ShopProductAttributeIntValue {
                __typename
                name
                intValue: value
            }
            ... on ShopProductAttributeFloatValue {
                __typename
                name
                floatValue: value
            }
            ... on ShopProductAttributeImageValue {
                __typename
                name
                imageValue: value {
                    id
                    url
                    width
                    height
                }
            }
            ... on ShopProductAttributeFileValue {
                __typename
                name
                fileValue: value {
                    id
                    filename
                    contentType
                    url
                }
            }
            ... on ShopProductAttributeStringArrayValue {
                __typename
                name
                stringArrayValue: value
            }
            ... on ShopProductAttributeImageArrayValue {
                __typename
                name
                imageArrayValue: value {
                    height
                    width
                    url
                    id
                }
            }
            ... on ShopProductAttributeFileArrayValue {
                __typename
                name
                fileArrayValue: value {
                    url
                    contentType
                    filename
                    id
                }
            }
        }
        price
        salePrice
        stock
        onSale
        hidden
        upsells {
            product {
                id
                type
                name
                slug
                category
                description
                images {
                    height
                    width
                    url
                    id
                }
                options {
                    price
                    inputType
                    placeholder
                    required
                    values {
                        description
                        name
                        id
                        price
                    }
                    description
                    name
                    id
                    parentId
                    parentValueIds
                }
                variantOptions {
                    values {
                        name
                        id
                    }
                    id
                    name
                }
                tags
                attributes {
                    ... on ShopProductAttributeStringValue {
                        __typename
                        name
                        stringValue: value
                    }
                    ... on ShopProductAttributeBooleanValue {
                        __typename
                        name
                        booleanValue: value
                    }
                    ... on ShopProductAttributeIntValue {
                        __typename
                        name
                        intValue: value
                    }
                    ... on ShopProductAttributeFloatValue {
                        __typename
                        name
                        floatValue: value
                    }
                    ... on ShopProductAttributeImageValue {
                        __typename
                        name
                        imageValue: value {
                            id
                            url
                            width
                            height
                        }
                    }
                    ... on ShopProductAttributeFileValue {
                        __typename
                        name
                        fileValue: value {
                            id
                            filename
                            contentType
                            url
                        }
                    }
                    ... on ShopProductAttributeStringArrayValue {
                        __typename
                        name
                        stringArrayValue: value
                    }
                    ... on ShopProductAttributeImageArrayValue {
                        __typename
                        name
                        imageArrayValue: value {
                            height
                            width
                            url
                            id
                        }
                    }
                    ... on ShopProductAttributeFileArrayValue {
                        __typename
                        name
                        fileArrayValue: value {
                            url
                            contentType
                            filename
                            id
                        }
                    }
                }
                price
                salePrice
                stock
                onSale
                hidden
                crossSells {
                    discount_type
                    discount_amount
                    discount_percent
                    product {
                        id
                        type
                        name
                        slug
                        category
                        description
                        images {
                            height
                            width
                            url
                            id
                        }
                        options {
                            price
                            inputType
                            placeholder
                            required
                            values {
                                description
                                name
                                id
                                price
                            }
                            description
                            name
                            id
                            parentId
                            parentValueIds
                        }
                        variantOptions {
                            values {
                                name
                                id
                            }
                            id
                            name
                        }
                        tags
                        attributes {
                            ... on ShopProductAttributeStringValue {
                                __typename
                                name
                                stringValue: value
                            }
                            ... on ShopProductAttributeBooleanValue {
                                __typename
                                name
                                booleanValue: value
                            }
                            ... on ShopProductAttributeIntValue {
                                __typename
                                name
                                intValue: value
                            }
                            ... on ShopProductAttributeFloatValue {
                                __typename
                                name
                                floatValue: value
                            }
                            ... on ShopProductAttributeImageValue {
                                __typename
                                name
                                imageValue: value {
                                    id
                                    url
                                    width
                                    height
                                }
                            }
                            ... on ShopProductAttributeFileValue {
                                __typename
                                name
                                fileValue: value {
                                    id
                                    filename
                                    contentType
                                    url
                                }
                            }
                            ... on ShopProductAttributeStringArrayValue {
                                __typename
                                name
                                stringArrayValue: value
                            }
                            ... on ShopProductAttributeImageArrayValue {
                                __typename
                                name
                                imageArrayValue: value {
                                    height
                                    width
                                    url
                                    id
                                }
                            }
                            ... on ShopProductAttributeFileArrayValue {
                                __typename
                                name
                                fileArrayValue: value {
                                    url
                                    contentType
                                    filename
                                    id
                                }
                            }
                        }
                        price
                        salePrice
                        stock
                        onSale
                        hidden
                    }
                }
            }
        }
        crossSells {
            discount_type
            discount_amount
            discount_percent
            product {
                id
                type
                name
                slug
                category
                description
                images {
                    height
                    width
                    url
                    id
                }
                options {
                    price
                    inputType
                    placeholder
                    required
                    values {
                        description
                        name
                        id
                        price
                    }
                    description
                    name
                    id
                    parentId
                    parentValueIds
                }
                variantOptions {
                    values {
                        name
                        id
                    }
                    id
                    name
                }
                tags
                attributes {
                    ... on ShopProductAttributeStringValue {
                        __typename
                        name
                        stringValue: value
                    }
                    ... on ShopProductAttributeBooleanValue {
                        __typename
                        name
                        booleanValue: value
                    }
                    ... on ShopProductAttributeIntValue {
                        __typename
                        name
                        intValue: value
                    }
                    ... on ShopProductAttributeFloatValue {
                        __typename
                        name
                        floatValue: value
                    }
                    ... on ShopProductAttributeImageValue {
                        __typename
                        name
                        imageValue: value {
                            id
                            url
                            width
                            height
                        }
                    }
                    ... on ShopProductAttributeFileValue {
                        __typename
                        name
                        fileValue: value {
                            id
                            filename
                            contentType
                            url
                        }
                    }
                    ... on ShopProductAttributeStringArrayValue {
                        __typename
                        name
                        stringArrayValue: value
                    }
                    ... on ShopProductAttributeImageArrayValue {
                        __typename
                        name
                        imageArrayValue: value {
                            height
                            width
                            url
                            id
                        }
                    }
                    ... on ShopProductAttributeFileArrayValue {
                        __typename
                        name
                        fileArrayValue: value {
                            url
                            contentType
                            filename
                            id
                        }
                    }
                }
                price
                salePrice
                stock
                onSale
                hidden
            }
        }
        bundleItems {
            id
            productId
            variantId
            quantity
            product {
                id
                type
                name
                slug
                category
                description
                images {
                    height
                    width
                    url
                    id
                }
                options {
                    price
                    inputType
                    placeholder
                    required
                    values {
                        description
                        name
                        id
                        price
                    }
                    description
                    name
                    id
                    parentId
                    parentValueIds
                }
                variantOptions {
                    values {
                        name
                        id
                    }
                    id
                    name
                }
                tags
                attributes {
                    ... on ShopProductAttributeStringValue {
                        __typename
                        name
                        stringValue: value
                    }
                    ... on ShopProductAttributeBooleanValue {
                        __typename
                        name
                        booleanValue: value
                    }
                    ... on ShopProductAttributeIntValue {
                        __typename
                        name
                        intValue: value
                    }
                    ... on ShopProductAttributeFloatValue {
                        __typename
                        name
                        floatValue: value
                    }
                    ... on ShopProductAttributeImageValue {
                        __typename
                        name
                        imageValue: value {
                            id
                            url
                            width
                            height
                        }
                    }
                    ... on ShopProductAttributeFileValue {
                        __typename
                        name
                        fileValue: value {
                            id
                            filename
                            contentType
                            url
                        }
                    }
                    ... on ShopProductAttributeStringArrayValue {
                        __typename
                        name
                        stringArrayValue: value
                    }
                    ... on ShopProductAttributeImageArrayValue {
                        __typename
                        name
                        imageArrayValue: value {
                            height
                            width
                            url
                            id
                        }
                    }
                    ... on ShopProductAttributeFileArrayValue {
                        __typename
                        name
                        fileArrayValue: value {
                            url
                            contentType
                            filename
                            id
                        }
                    }
                }
                price
                salePrice
                stock
                onSale
                hidden
            }
        }
    }
`;
export const ShopProductBase = gql`
    fragment ShopProductBase on ShopProductBase {
        id
        type
        name
        slug
        category
        description
        images {
            height
            width
            url
            id
        }
        options {
            price
            inputType
            placeholder
            required
            values {
                description
                name
                id
                price
            }
            description
            name
            id
            parentId
            parentValueIds
        }
        variantOptions {
            values {
                name
                id
            }
            id
            name
        }
        tags
        attributes {
            ... on ShopProductAttributeStringValue {
                __typename
                name
                stringValue: value
            }
            ... on ShopProductAttributeBooleanValue {
                __typename
                name
                booleanValue: value
            }
            ... on ShopProductAttributeIntValue {
                __typename
                name
                intValue: value
            }
            ... on ShopProductAttributeFloatValue {
                __typename
                name
                floatValue: value
            }
            ... on ShopProductAttributeImageValue {
                __typename
                name
                imageValue: value {
                    id
                    url
                    width
                    height
                }
            }
            ... on ShopProductAttributeFileValue {
                __typename
                name
                fileValue: value {
                    id
                    filename
                    contentType
                    url
                }
            }
            ... on ShopProductAttributeStringArrayValue {
                __typename
                name
                stringArrayValue: value
            }
            ... on ShopProductAttributeImageArrayValue {
                __typename
                name
                imageArrayValue: value {
                    height
                    width
                    url
                    id
                }
            }
            ... on ShopProductAttributeFileArrayValue {
                __typename
                name
                fileArrayValue: value {
                    url
                    contentType
                    filename
                    id
                }
            }
        }
        price
        salePrice
        stock
        onSale
        hidden
    }
`;
export const AuthPasswordSignUp = gql`
    query AuthPasswordSignUp($username: String!, $password: String!) {
        authSignUp(password: $password, username: $username) {
            userId
            confirmed
        }
    }
`;
export const AuthPasswordLogin = gql`
    query AuthPasswordLogin($username: String!, $password: String!) {
        authPasswordLogin(password: $password, username: $username) {
            idToken
            refreshToken
            expiresIn
            tokenType
            accessToken
        }
    }
`;
export const ShopGetCart = gql`
    query ShopGetCart($cartId: String!) {
        shopGetCart(cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopCreateCartWithItems = gql`
    mutation ShopCreateCartWithItems($items: [ShopCartItemInput!]!) {
        shopCreateCartWithItems(items: $items) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopAddItemsToCart = gql`
    mutation ShopAddItemsToCart($items: [ShopCartItemInput!]!, $cartId: String!) {
        shopAddItemsToCart(items: $items, cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopUpdateCartItemQuantity = gql`
    mutation ShopUpdateCartItemQuantity($cartId: String!, $itemId: String!, $quantity: Int!) {
        shopUpdateCartItemQuantity(cartId: $cartId, itemId: $itemId, quantity: $quantity) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopRemoveItemFromCart = gql`
    mutation ShopRemoveItemFromCart($itemId: String!, $cartId: String!) {
        shopRemoveItemFromCart(itemId: $itemId, cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopClearCart = gql`
    mutation ShopClearCart($cartId: String!) {
        shopClearAllCartItems(cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopApplyCouponToCart = gql`
    mutation ShopApplyCouponToCart($couponCode: String!, $cartId: String!) {
        shopApplyCouponToCart(couponCode: $couponCode, cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopRemoveCouponFromCart = gql`
    mutation ShopRemoveCouponFromCart($cartId: String!) {
        shopRemoveCouponFromCart(cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopApplyGiftCardToCart = gql`
    mutation ShopApplyGiftCardToCart($cartId: String!, $giftcardCode: String!, $amount: Float!) {
        shopApplyGiftCardToCart(giftcardCode: $giftcardCode, amount: $amount, cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopRemoveGiftcardFromCart = gql`
    mutation ShopRemoveGiftcardFromCart($cartId: String!, $giftcardId: String!) {
        shopRemoveGiftcardFromCart(cartId: $cartId, giftcardId: $giftcardId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopApplyAccountCreditToCart = gql`
    mutation ShopApplyAccountCreditToCart($cartId: String!, $amount: Float!) {
        shopApplyAccountCreditToCart(cartId: $cartId, amount: $amount) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopRemoveAccountCreditFromCart = gql`
    mutation ShopRemoveAccountCreditFromCart($cartId: String!) {
        shopRemoveAccountCreditFromCart(cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopApplyPromotionToCart = gql`
    mutation ShopApplyPromotionToCart($cartId: String!, $promotionId: String!) {
        shopApplyPromotionToCart(promotionId: $promotionId, cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopRemovePromotionFromCart = gql`
    mutation ShopRemovePromotionFromCart($cartId: String!, $promotionId: String!) {
        shopRemovePromotionFromCart(promotionId: $promotionId, cartId: $cartId) {
            ...ShopCart
        }
    }
    ${ShopCart}
`;
export const ShopCheckout = gql`
    mutation ShopCheckout($cartId: String!) {
        shopCheckout(cartId: $cartId) {
            orderNumber
            message
        }
    }
`;
export const ShopGetRootCategories = gql`
    query ShopGetRootCategories {
        shopGetRootCategories {
            id
            name
            description
            images {
                id
                url
                width
                height
            }
            slug
            sort
            parentId
            rootId
        }
    }
`;
export const ShopGetCategoriesWithParentyCategory = gql`
    query ShopGetCategoriesWithParentyCategory($parentCategoryId: String!) {
        shopGetCategoriesWithParentCategory(parentCategoryId: $parentCategoryId) {
            id
            name
            description
            images {
                id
                url
                width
                height
            }
            slug
            sort
            parentId
            rootId
        }
    }
`;
export const ShopGetProductList = gql`
    query ShopGetProductList($input: ShopGetProductsInput!) {
        shopGetProducts(input: $input) {
            page
            count
            products {
                ...ShopProductForListView
            }
        }
    }
    ${ShopProductForListView}
`;
export const ShopGetProductBySlug = gql`
    query ShopGetProductBySlug($slug: String!) {
        product: shopGetProductBySlug(slug: $slug) {
            ...ShopProduct
        }
    }
    ${ShopProduct}
`;
export const UserGetDetails = gql`
    query UserGetDetails {
        userGetDetails {
            firstName
            lastName
            avatarUrl
            displayName
            languageCode
            email
            phoneNumber
        }
    }
`;
