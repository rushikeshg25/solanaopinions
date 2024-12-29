use anchor_lang::prelude::*;
mod states;
use states::*;
mod contexts;
use contexts::*;

declare_id!("J85ChLMWGQpRVu9VChUwFrfXnThNQRWho9ot8c4MFbFu");

#[program]
pub mod contract_options {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let event_counter = &mut ctx.accounts.event_counter;
        event_counter.count = 0;

        let candidate_counter = &mut ctx.accounts.candidate_counter;
        candidate_counter.count = 0;
        Ok(())
    }

    pub fn create_event(
        ctx: Context<CreateEvent>,
        title: String,
        start_date: u64,
        end_date: u64,
    ) -> Result<()> {
        Ok(())
    }
}

#[error_code]
pub enum ErrorCode {
    #[msg("The start date must be earlier than the end date")]
    InvalidEvent,
    #[msg("Cannot vote after the event has ended")]
    EventClosed,
    #[msg("Cannot vote before the event has started")]
    EventNotStarted,
    #[msg("Already voted")]
    AlreadyVoted,
    #[msg("Event does not exist")]
    EventDoesNotExist,
    #[msg("Candidate does not exist")]
    CandidateDoesNotExist,
}
