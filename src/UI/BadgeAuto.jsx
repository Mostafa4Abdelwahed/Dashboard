import { Badge } from '@chakra-ui/react'

const BadgeAuto = ({ type, children }) => {
    return (
        <Badge colorScheme=
            {
                type === "فيلا"  ||type === "تأجير" ? "green" :
                type === "شقة" ? "purple" :
                type === "بناية كاملة" ? null :
                type === "قطعة أرض"  ||type === "بيع" ? "red" : null
            }
        >{children}</Badge>
    )
}

export default BadgeAuto