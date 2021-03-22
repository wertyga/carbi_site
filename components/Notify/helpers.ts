import { NotifiesUser } from 'redux/types/notifies';

export const notifyDecode = {
	[NotifiesUser.MORE]: 'More than chosen value',
	[NotifiesUser.LESS]: 'Less than chosen value',
	[NotifiesUser.DIFFERENCE]: 'Difference between min and max values',
	INITIAL: '',
}
