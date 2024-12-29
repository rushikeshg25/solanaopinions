use anchor_lang::prelude::*;
mod contexts;
mod states;
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
        if start_date >= end_date {
            return Err(error!(ErrorCode::InvalidEvent));
        }
        let event_counter = &mut ctx.accounts.event_counter;
        event_counter.count += 1;

        let event = &mut ctx.accounts.event;
        event.id = event_counter.count;
        event.title = title;
        event.start_date = start_date;
        event.end_date = end_date;
        event.candidates = 0;
        Ok(())
    }

    pub fn create_candidate(ctx: Context<CreateCandidate>, event_id: u64) -> Result<()> {
        let event = &mut ctx.accounts.event;
        if event.id != event_id {
            return Err(error!(ErrorCode::EventDoesNotExist));
        }

        let candidate = &mut ctx.accounts.candidate;
        if candidate.has_registered {
            return Err(error!(ErrorCode::AlreadyVoted));
        }

        let candidate_counter = &mut ctx.accounts.candidate_counter;
        candidate_counter.count += 1;

        candidate.id = candidate_counter.count;
        candidate.event_id = event_id;
        candidate.has_registered = false;
        event.candidates += 1;
        Ok(())
    }

    pub fn create_vote(ctx: Context<CreateVote>, event_id: u64, candidate_id: u64) -> Result<()> {
        let vote = &mut ctx.accounts.vote;
        let candidate = &mut ctx.accounts.candidate;
        let poll = &mut ctx.accounts.event;

        if poll.id != event_id {
            return Err(error!(ErrorCode::EventDoesNotExist));
        }
        if candidate.id != candidate_id {
            return Err(error!(ErrorCode::CandidateDoesNotExist));
        }
        let current = Clock::get()?.unix_timestamp as u64;
        if poll.start_date > current {
            return Err(error!(ErrorCode::EventNotStarted));
        }
        if poll.end_date < current {
            return Err(error!(ErrorCode::EventClosed));
        }
        if vote.has_voted {
            return Err(error!(ErrorCode::AlreadyVoted));
        }

        vote.event_id = event_id;
        vote.candidate_id = candidate_id;
        vote.has_voted = true;

        candidate.votes += 1;

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
